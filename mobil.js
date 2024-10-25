import express from "express";
const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: "2021",
    },

    {
        merk: "Porsche",
        model: "Sport",
        warna: "Kuning",
        tahun: "2024",
    }
];
router.get("/", (req, res) => {
    res.json(mobil);
});
export default router;