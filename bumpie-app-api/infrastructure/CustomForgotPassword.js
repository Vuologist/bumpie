export const handler = (event, context, callback) => {
  const username = event.request.userAttributes.email.split("@")[0];
  const forgotPasswordMessage = `
<!DOCTYPE html>
<html>
<head>
<style>
body {
	background-color: white;
}

div {
	position: absolute;
	left: 30%;
	width: 600px;
	background-color: #fff;
}

h1 {
	font-family: 'Quicksand', sans-serif;
	size: 36px;
    padding-top: 10px;
	margin-left: 50px;
}

.btext {
	font-family: 'Roboto', sans-serif;
	color: #000 !important;
	size: 16px;
	margin-left: 50px;
}

section {
	background-color: #8FE8DF;
	padding-top: 25px;
	padding-bottom: 50px;
    padding-left: 25px;
    padding-right: 50px;
	width: 525px;
	height: 30px;
}

footer {
	width: 600px;
	background-color: #C5C5C4;
	margin-top: 70px;
	padding-top: 50px;
	padding-bottom: 70px;
	width: 600px;
	height: 100px;
}

.ftext {
	font-family: 'Roboto', sans-serif;
	color: #fff !important;
	size: 14px;
	text-align: center;
}

</style>
</head>
<body>

<div><section><img src="https://i.ibb.co/MG0WRVt/B-01.png" width="50px" alt="Bumpie Logo" border="0">
</section><br>
<h1>${username},</h1>
<p class="btext">Looks like you forgot your password; no worries!<br>
<br>
Click the link below to reset your password:<br>
<br>
	<a
		href="https://bumpie.me/password-reset/${event.request.userAttributes.email}/${event.request.codeParameter}"
		>Reset Password</a><br />
<br>
See you soon!</p>

<footer>
<center><p1 class="ftext">This email was sent to you by: BUMPIE<br>
<br>
You are receiving this email because you recently<br>
signed up for our services.<br>
<br>
© 2020 BUMPIE. All Rights Reserved. </p1></center>
</footer>
</div>

</body>
</html>
`;

  if (event.triggerSource === "CustomMessage_ForgotPassword") {
    event.response.emailSubject = "Bumpie Password Recovery";
    event.response.emailMessage = forgotPasswordMessage;
  }

  callback(null, event);
};
