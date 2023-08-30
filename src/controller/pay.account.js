import { fsRead, fsWrite } from "../libs/fs.helper.js";
import moment from "moment"; 

export const payuser = (req, res) => {
  try {
    const { id, money } = req.body;
    const data = JSON.parse(fsRead("/src/db/users.json"));
    const filterData = data.find((e) => e.id === id);

    const paymentTime = moment().format("YYYY-MM-DD HH:mm:ss");

    filterData.money.push({
      amount: money,
      time: paymentTime, 
    });

    fsWrite("/src/db/users.json", data);
    res.status(200).json({
      status: 200,
      msg: "to'lov amalga oshirildi",
      paymentTime: paymentTime,});
  } catch (error) {
    console.log(error);
  }
};
