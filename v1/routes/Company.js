const express = require("express"); //Load Express
const router = express.Router({ mergeParams: true }); //Inherit companyID param
const controller = require("../controllers/Company");
const Joi = require('joi');

const validateSchema = {
	getCompany: Joi.object().keys({
		companyId: Joi.string().guid(),
	}),
	createCompany: Joi.object().keys({
    companyParentId: Joi.string().guid(),
	  companyType: Joi.string().max(255),
	  companyName: Joi.string().max(255),
	  companyAddress: Joi.string(),
	  companyCity: Joi.string(),
	  companyState: Joi.string(),
	  companyZipcode: Joi.string(),
	  companyCountry: Joi.string(),
	  companyPhone: Joi.string(),
	  companyEmail: Joi.string().email(),
	  companyWebsite: Joi.string().uri(),
	  companyProvisioned: Joi.string().max(1),
	  companyProvisionedDomain: Joi.string().uri(),
	  companyProvisionedSubdomain: Joi.string().uri(),
	  companyProvisionedDatabase: Joi.string().max(255),
	  companyDomainsRedirect: Joi.string().max(1),
	  companyContactFirstName: Joi.string().max(255),
	  companyContactLastName: Joi.string().max(255),
	  companyContactEmail: Joi.string().email(),
	  companyContactPhone: Joi.string(),
	  companyStatus: Joi.string().max(1),
	  legacyId: Joi.string(),
	  legacyParentId: Joi.string()
  }),
  updateCompany: Joi.object().keys({
    companyParentId: Joi.string().guid(),
	  companyType: Joi.string().max(255),
	  companyName: Joi.string().max(255),
	  companyAddress: Joi.string(),
	  companyCity: Joi.string(),
	  companyState: Joi.string(),
	  companyZipcode: Joi.string(),
	  companyCountry: Joi.string(),
	  companyPhone: Joi.string(),
	  companyEmail: Joi.string().email(),
	  companyWebsite: Joi.string().uri(),
	  companyProvisioned: Joi.string().max(1),
	  companyProvisionedDomain: Joi.string().uri(),
	  companyProvisionedSubdomain: Joi.string().uri(),
	  companyProvisionedDatabase: Joi.string().max(255),
	  companyDomainsRedirect: Joi.string().max(1),
	  companyContactFirstName: Joi.string().max(255),
	  companyContactLastName: Joi.string().max(255),
	  companyContactEmail: Joi.string().email(),
	  companyContactPhone: Joi.string(),
	  companyStatus: Joi.string().max(1),
	  legacyId: Joi.string(),
	  legacyParentId: Joi.string()
  }),
  deleteCompany: Joi.object().keys({
  	companyId: Joi.string().guid()
  })
}

//GET tests
router.get("/", controller.company_read_all);
//GET test By Id
router.get("/:companyId", (req,res) => {
	validateSchema.getCompany.validate(req.params)
		.then(validatedChanges => {
      controller.company_read_by_id(req, res);
		})
		.catch(validationError => {
			const errorMessage = validationError.details.map(d => d.message);
      res.customHandler(500, false, errorMessage, validationError);
    });
});
//POST test Create
router.post("/", (req,res) => {
	validateSchema.createCompany.validate(req.body)
		.then(validatedChanges => {
      controller.company_create(req, res);
		})
		.catch(validationError => {
			const errorMessage = validationError.details.map(d => d.message);
      res.customHandler(500, false, errorMessage, validationError);
    });
});
//PATCH test Update
router.patch("/:companyId", (req,res) => {
	validateSchema.createCompany.validate(req.body)
		.then(validatedChanges => {
      controller.company_update(req, res);
		})
		.catch(validationError => {
			const errorMessage = validationError.details.map(d => d.message);
      res.customHandler(500, false, errorMessage, validationError);
    });
});
//DELETE test Delete
router.delete("/:companyId", (req,res) => {
	validateSchema.deleteCompany.validate(req.params)
		.then(validatedChanges => {
      controller.company_delete(req, res);
		})
		.catch(validationError => {
			const errorMessage = validationError.details.map(d => d.message);
      res.customHandler(500, false, errorMessage, validationError);
    });
});

module.exports = router;
