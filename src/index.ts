import express, { Request } from "express";
import cors from "cors";
const mountApiRoutes = require("./api/Ai_api")
const app = express();
app.use(cors({
    origin: ['https://my.dev.azure.ddiwork.com', 'http://localhost:3800', 'http://localhost:8080', 'https://my.qa.azure.ddiwork.com', 'https://my.staging.azure.ddiwork.com', 'https://my.ddiwork.com', 'https://my.staging.ddiwork.com', 'https://admin.dev.azure.ddiwork.com','https://admin.qa.azure.ddiwork.com','https://admin.staging.azure.ddiwork.com','https://admin.ddiwork.com', 'https://my.azure.ddiwork.com', 'https://admin.azure.ddiwork.com','https://identity.dev.azure.ddiwork.com/', 'https://identity.qa.azure.ddiwork.com/',	'https://identity.stage.azure.ddiwork.com/',	'https://identity.ddiwork.com/', 'https://my.loadtest.azure.ddiwork.com', 'https://admin.loadtest.azure.ddiwork.com', 'https://identity.loadtest.azure.ddiwork.com/','http://40.77.122.207:15200','http://20.69.32.130:15200','http://40.77.122.207:15300','http://40.77.122.207:15400','http://40.77.122.207:5000','http://40.77.122.207:5001','http://40.77.122.207:5002','http://40.77.122.207:5003','http://40.77.122.207:5004','http://40.77.122.207:5005','http://40.77.122.207:5006','http://40.77.122.207:5007','http://40.77.122.207:5009','http://40.77.122.207:5010','http://40.77.122.207:5011','http://20.69.32.130','http://20.69.32.130:5000','http://20.69.32.130:5001','http://20.69.32.130:5002','http://20.69.32.130:5003','http://20.69.32.130:5004','http://20.69.32.130:5005','http://20.69.32.130:5006','http://20.69.32.130:5007','http://20.69.32.130:5008','http://20.69.32.130:5009','http://20.69.32.130:5010','http://20.69.32.130:5011','http://20.69.32.130:5012','http://20.69.32.130:5013','http://20.69.32.130:5014','http://20.69.32.130:5015','http://20.69.32.130:5016','http://20.69.32.130:5017','http://20.69.32.130:5018','http://20.69.32.130:5019']
})
)

app.use(function(req, res, next) {
	if (req.secure) {
		res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
	}
	next();
})
app.use("/api",mountApiRoutes);
const httpPort = 3200;
app.listen(httpPort, () => console.log('DDL Node Server listening on port ' + httpPort + '!'));

app.use(function(req,res,next){
	res.removeHeader("X-Powered-By");
	res.setHeader('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', ['OPTIONS','GET','POST']);
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.header("X-powered-by", "DDL 2.0");
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
	res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
	res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
	res.setHeader('X-Frame-Options', 'DENY');
	res.setHeader('X-Content-Type-Options', "nosniff");
	res.setHeader('X-XSS-Protection', "1; mode=block");
    res.setHeader('Referrer-Policy', 'strict-origin');
	next();
})