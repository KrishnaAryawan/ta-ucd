import theyardAxios from "./_init";

const MenuService = {
  async findAllMenu() {
    try {
      return await theyardAxios.get("/menus");
    } catch (e) {
      console.error(e);
    }
  },
  async findMenuById(id) {
    try {
      return await theyardAxios.get("/menu/" + id);
    } catch (e) {
      console.error(e);
    }
  },
};

export default MenuService;
