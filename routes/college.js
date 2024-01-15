import DatabaseController from "../database/DatabaseController.js"
import express  from 'express';

const router = express.Router();

router.get("/countries", async (req, res)=>{
    const sql = "select id,countryName from tbl_countries ORDER BY countryName"
    let data = await DatabaseController.select(sql)
    return res.json(data)
})

router.get("/state", async (req, res)=>{
  const countryID = req.query.countryID;
  const sql = `SELECT stateID, stateName FROM tbl_states WHERE countryID = ${countryID} ORDER BY stateName`;
  const data = await DatabaseController.select(sql);
  return res.json(data);
})

router.get("/city", async (req, res)=>{
    const stateID = req.query.stateID;
    const sql = `select cityID,cityName from tbl_city WHERE stateID = ${stateID} ORDER BY cityName`
    let data = await DatabaseController.select(sql)
    return res.json(data)
})

router.get("/College", async (req, res)=>{
    const cityID = req.query.cityID;
    const sql = `SELECT collegeID, collegeName FROM tbl_college where cityID = ${cityID} ORDER BY collegeName`
    let data = await DatabaseController.select(sql)
    return res.json(data)
})

export default router
