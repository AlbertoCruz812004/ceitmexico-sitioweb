import { fillInStudentFields } from "/js/module/fillInStudentFields.js";
import { getData } from "/js/module/getData.js";

const init = async () => {
  try {
    const data = await getData();
    fillInStudentFields(data);
  } catch (error) {
    console.error("Error: ", error);
  }
};

window.onload = init;
