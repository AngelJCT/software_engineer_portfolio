import axios from "axios";

const sendEmail = async (email, subject, message) => {
  return axios({
    method: "post",
    url: "/api/send-mail",
    data: {
      email: email,
      name: name,
      message: message,
    },
  });
};

export default sendEmail;
