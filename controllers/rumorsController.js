const JsRumour = require("../models/models/Js Rumour");

const rummers =[ {
   id:1,
    name: "measels out break",
    sign: " fever,rush, vomiting",
    description: "50 people dead by measels out break around hawassa",
    region: "Sidama",
    zone: "hawassa",
    woreda: "tabor",
    kebele: "fara",
    number_of_case: 100,
    number_of_death: 50,
    reporting_date: "10/02/2025",
  },
  { id:2,
    name: "malaria out break",
    sign: " fever, vomiting",
    description: "10 people dead by measels out break around hawassa",
    region: "Sidama",
    zone: "hawassa",
    woreda: "tabor",
    kebele: "ogena wacho",
    number_of_case: 20,
    number_of_death: 10,
    reporting_date: "10/03/2025",
  },
  {
    id:3,
    name: "cholera out break",
    sign: " fever, vomiting, diarrhea",
    description: "15 people dead by measels out break around hawassa",
    region: "Sidama",
    zone: "hawassa",
    woreda: "tabor",
    kebele: "tilite",
    number_of_case: 35,
    number_of_death: 15,
    reporting_date: "10/04/2025",
  },
];

const getAllRumours = async(req, res) => {
  try {
    const rms = await JsRumour.find();
    res.json(rms);
  } catch (error) {
    console.log(error);
    res.status(500).send("iternal server error");
  }

};

const getRomurById =async (req,res)=>{

try {
  const id = req?.params.id;
  const rumour = await JsRumour.findById(id);
  if (!rumour) {
    return res.status(404).json({ message: "rummour not found" });
  }
  res.json(rumour);
} catch (error) {
  console.log(error);
  res.status(500).send("iternal server error");
}
}


const updateRumourById =async (req, res) => {
  try {
    const id = req.params.id;
    const rummerUpdate = req.body;
    //   const rumour = rummers.find((rum) => rum.id === parseInt(id));
    const rumour = await JsRumour.findById(id);
    console.log(id);
    if (!rumour) {
      return res.status(404).json({ message: "rummour not found" });
    }
    rumour.name = rummerUpdate.name ? rummerUpdate.name : rumour.name;
    rumour.sign = rummerUpdate.sign;
    rumour.description = rummerUpdate.description;
    rumour.region = rummerUpdate.region;
    rumour.zone = rummerUpdate.zone;
    rumour.kebele = rummerUpdate.kebele;
    rumour.number_of_case = rummerUpdate.number_of_case;
    rumour.number_of_death = rummerUpdate.number_of_death;
    rumour.reporting_date = rummerUpdate.reporting_date;
    await rumour.save();
    res.json({ message: "successfully updated", data: rumour });
  } catch (error) {
    console.log(error);
    res.json(500).send("internal server error");
  }

};

const createNewRumour = (req, res) => {
  const newRumour = new JsRumour({
    name: req.body.name,
    sign: req.body.sign,
    description: req.body.description,
    region: req.body.region,
    zone: req.body.zone,
    kebele: req.body.kebele,
    number_of_case: req.body.number_of_case,
    number_of_death: req.body.number_of_death,
    reporting_date: req.body.reporting_date,
  });
  newRumour.save();
  res.json(newRumour);
  
};


const deleteRumourById = async(req, res) => {
  try {
    const id = req.params.id;
    const rumor = await JsRumour.findByIdAndDelete(id);
    if (!rumor) {
      return res.status(404).json({message: "rumor not found"});
    }

    res.json({message: "rumor is deleted successfuly"})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "internal server error"});
    
  }

}


module.exports = {
  getAllRumours,
  getRomurById,
  updateRumourById,
  createNewRumour,
 deleteRumourById
};
