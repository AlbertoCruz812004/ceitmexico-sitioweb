export const getData = async () => {
  try {
    const response = await fetch("/php/debug/verifyDataStudent.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.info(data);

    return data;
  } catch (error) {}
};
