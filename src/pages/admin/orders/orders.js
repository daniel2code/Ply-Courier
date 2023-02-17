import React, { useState, useEffect, useCallback } from "react";
import "./orders.css";
import Table from "./ordersTable/table";
import Wrapper from "../wrapper/wrapper";
import { SiVirustotal } from "react-icons/si";
import Orderform from "./ordersTable/orderForm/orderform";
import { db, storage } from "../../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Orders = () => {
  const [openForm, setOpenForm] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState();
  const [perc, setPerc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData]=useState(null)

  console.log(data)

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;

            default:
              return;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setFormData({ ...formData, photo: downloadURL });
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleOpenForm = () => {
    setOpenForm((prev) => !prev);
  };

  const handleChange = useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let docId = uuidv4();

    try {
      let data = await setDoc(doc(db, "orders", docId), {
        id: docId,
        ...formData,
      });

      setLoading(false);
      // window.location.reload();
      console.log(data);
      // onClose();
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    // handleSubmit();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });

        setData(list);
      } catch (err) {
        console.log(err);
      }
    };

    async function resolveRequests() {
      await fetchData();
    }

    resolveRequests();
  }, []);

  return (
    <Wrapper>
      {openForm && (
        <Orderform
          handleOpenForm={handleOpenForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          setFile={setFile}
          loading={loading}
          perc={perc}
        />
      )}
      <div className="p-4">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="max-w-[1250px] w-full">
            <div className="stats_box p-4 mt-3 flex-col items-center w-full">
              <h2 className="text-[25px]">Orders Ranking</h2>

              <div className="mt-4 flex justify-between">
                <div className="flex gap-x-3">
                  <div className={`p-3 bg-[#00000030] rounded-full`}>
                    <SiVirustotal size={25} />
                  </div>

                  <div>
                    <p className="text-[20px]">300</p>
                    <p className="text-[12px]">orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[20px]">
              <Table handleOpenForm={handleOpenForm} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Orders;
