module.exports = {
    create: Joi.object().keys({
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
    })
};