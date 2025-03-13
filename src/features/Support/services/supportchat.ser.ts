import { API } from "../../../Core/url";

export const handleSendImage = async (formData) => {
  try {
    const res = await API.patch("/support-uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });

    return res?.data?.msg;
  } catch (error) {
    return false;
  }
};

export const handleUnreadMessage = async ({
  chatId,
  userId,
}: {
  chatId: string;
  userId: string;
}) => {
  console.log("-------------------");

  try {
    await API.patch("/support-chat/mark-to-read", {
      chatId,
      userId,
    });
    console.log("-------------------.....");

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};
