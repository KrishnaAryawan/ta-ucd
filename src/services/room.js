import abhisAxios from "./_init";

const RoomService = {
  async findAllRooms() {
    try {
      return await abhisAxios.get("/rooms");
    } catch (e) {
      console.error(e);
    }
  },
  async findRoomById(id) {
    try {
      return await abhisAxios.get("/room/" + id);
    } catch (e) {
      console.error(e);
    }
  },
};

export default RoomService;
