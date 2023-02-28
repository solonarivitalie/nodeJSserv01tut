const verifyRoles = (...allowedRoles) => {
    return (req, res, next)=>{
        if(!req?.roles) return res.sendStatus(401);//return false if there is no req or if there is a req but no roles
        const rolesArray = [...allowedRoles];
        /*
        console.log(rolesArray); //allowed
        console.log(req.roles); //user role
        */
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles