import React, { useState, useEffect, useCallback, useRef } from "react";
import "./orders.css";
import Table from "./ordersTable/table";
import Wrapper from "../wrapper/wrapper";
import { SiVirustotal } from "react-icons/si";
import Orderform from "./ordersTable/orderForm/orderform";
import UpdateModal from "./updateModal/updateModal";
import { db, storage } from "../../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

const Orders = () => {
  let docId = uuidv4();

  const [openForm, setOpenForm] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({ trackId: docId });
  const [perc, setPerc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState();
  const [openModal, setOpenModal] = useState(false);

  const form = useRef();

  const notify = (text) => toast(text);

  const sendForm = () => {
    emailjs
      .sendForm(
        "service_75hvs3s",
        "template_9k7f5fp",
        "#myForm",
        "user_PgZ0sFKko0nRm9OGElC9U"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log(result);
        },
        (error) => {
          // show the user an error
          console.log(error);
        }
      );
  };

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

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleChange = useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );

  const handleModalChange = useCallback(
    (e) => {
      setUpdate({ ...update, [e.target.name]: e.target.value });
    },
    [update]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData || (formData && Object.keys(formData).length < 9)) {
      notify("Please fill all input fields!");
    } else {
      setLoading(true);

      try {
        let data = await setDoc(doc(db, "orders", formData.trackId), {
          id: formData.trackId,
          ...formData,
        });
        sendForm();
        setLoading(false);
        notify("succesfully created order");
        setTimeout(() => {
          window.location.reload();
        }, 2000);

        // onClose();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
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

  const handleUpdateForm = (data) => {
    setUpdate(data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
    const taskDocRef = doc(db, "orders", update.trackId);
    try {
      await updateDoc(taskDocRef, {
        ...update,
      });
      setLoadingUpdate(false);
      notify("succesfully updated order");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      alert(err);
      setLoadingUpdate(false);
    }
  };

  console.log(update);
  console.log(formData);

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
          forrm={form}
        />
      )}

      {openModal && (
        <UpdateModal
          handleOpenModal={handleOpenModal}
          formData={update}
          handleChange={handleModalChange}
          handleUpdate={handleUpdate}
          loading={loadingUpdate}
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

                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[20px]">{data?.length}</p>
                    <p className="text-[12px]">orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[20px]">
              <Table
                handleOpenForm={handleOpenForm}
                data={data}
                handleOpenModal={handleOpenModal}
                handleUpdateForm={handleUpdateForm}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default Orders;
