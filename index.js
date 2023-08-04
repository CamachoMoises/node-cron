import cron from 'node-cron';
import nodemailer from 'nodemailer';

// create user test in nodemailer
// nodemailer.createTestAccount().then((account) => {
// 	console.log(account);
// });

//   user: 'jfet6dv3je6tk5vz@ethereal.email',
//   pass: 'De7wAUKRsUZkC6nm1t',
//   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//   imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//   web: 'https://ethereal.email'

const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	secure: false,
	auth: {
		user: 'jfet6dv3je6tk5vz@ethereal.email',
		pass: 'De7wAUKRsUZkC6nm1t',
	},
});

cron.schedule('*/3  * * * * *', () => {
	//database
	//fetch
	//api
	// process
	console.log('ejecutando! cada 3 s');
});

cron.schedule('1-5 * * * * *', () => {
	console.log('del seg 1 al 5');
});

cron.schedule('7,21,40 * * * * *', () => {
	console.log(`ejecucion del 7,21,40 ${new Date()}`);
});

cron.schedule('*/2 * * * *', async () => {
	const info = await transporter.sendMail({
		from: 'moisescamacho26@gmail.com',
		to: 'm26camacho@gmail.com',
		subject: 'Pruebas de nodemailer y node-cron',
		text: 'Esto es una simple prueba por favor ignora este correo.',
	});
	console.log(info.messageId);
	const previewURL = nodemailer.getTestMessageUrl(info);
	console.log(previewURL);
});
