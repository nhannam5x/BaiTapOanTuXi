const stateDefault = {
  mangDatCuoc: [
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
  ],
  ketQua: "I'm Iron Man, I love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png" },
};

export const GameOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};


