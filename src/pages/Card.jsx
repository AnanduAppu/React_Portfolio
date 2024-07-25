import profile from "../assets/profile.jpg";
import resume from "../assets/MERN_Resume.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, social: { github, email,linkedin } }) {
  const closeModal = (e) => {
    e.preventDefault()
    document.getElementById("my_modal_4").close();
  };
  return (
    <div className="w-full ">
      <div className="bg-white mt-0 " >
        <div className="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center">
          <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 rounded-lg">
            <img
              src={profile}
              alt="Responsive Design"
              className="w-full h-[55vh] max-sm:h-[42vh] object-cover rounded-lg  shadow-md shadow-violet-300 "
            />
          </div>
          <div className="md:w-1/2 lg:w-1/3 md:mr-8">
            <h1 className="text-3xl font-bold mb-4 text-center">{name}</h1>
            <p className="text-lg mb-4 text-center">{title}</p>
            <div className="flex align-center justify-center mt-4">
              <a
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                href={github}
                target="_blank" rel="noopener noreferrer"
              >
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              <a
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                href={linkedin}
                target="_blank" rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span class="sr-only">Linkedin</span>
              </a>
              <a
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
                target="_blank" rel="noopener noreferrer"
              >
                <FaRegEnvelope />
                <span class="sr-only">Email</span>
              </a>
            </div>
          
              <p className="text-lg mb-4 text-center">My Resume</p>
              <div className="flex gap-4 justify-center">
                <a
                  className="px-6 py-2 min-w-[120px] text-center shadow-lg shadow-gray-400  text-white bg-violet-600 border border-violet-600 rounded hover:bg-transparent hover:text-violet-600 focus:outline-none "
                  href={resume}
                  download
                >
                  Download
                </a>
                <div
                  className="btn px-6 py-2 min-w-[120px] shadow-lg shadow-gray-400 text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white  focus:outline-none "
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  View
                </div>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog  ">
                      {/* if there is a button, it will close the modal */}

                      <div className="flex justify-end">
                        <button className="btn text-rose-400 border-red-400"
                         onClick={(e)=>closeModal(e)}
                        >
                          Close
                        </button>
                      </div>
                    </form>

                    <img src={resume} alt="" />
                    <div className="modal-action"></div>
                  </div>
                </dialog>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
