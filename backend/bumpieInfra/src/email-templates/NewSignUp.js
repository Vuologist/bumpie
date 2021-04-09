export const newSignUp = (event, username) =>
  `
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
        font-family: "Quicksand", sans-serif;
        size: 36px;
        padding-top: 10px;
        margin-left: 50px;
      }

      .btext {
        font-family: "Roboto", sans-serif;
        color: #000 !important;
        size: 16px;
        margin-left: 50px;
      }

      section {
        background-color: #8fe8df;
        padding-top: 25px;
        padding-bottom: 50px;
        padding-left: 25px;
        padding-right: 50px;
        width: 525px;
        height: 30px;
      }

      footer {
        width: 600px;
        background-color: #c5c5c4;
        margin-top: 70px;
        padding-top: 50px;
        padding-bottom: 70px;
        width: 600px;
        height: 100px;
      }

      .ftext {
        font-family: "Roboto", sans-serif;
        color: #fff !important;
        size: 14px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div>
      <section>
        <img
          src="https://i.ibb.co/MG0WRVt/B-01.png"
          width="50px"
          alt="Bumpie Logo"
          border="0"
        />
      </section>
      <br />
      <h1>${username},</h1>
      <p class="btext">
        <br />
        Welcome to Bumpie! Click the link below to verify your account:
        <br />
        <a
          href="https://bumpie.me/email-verified/${event.request.userAttributes.email}/${event.request.codeParameter}"
          >bumpie.me</a
        >
        <br />
        <br />
        Thank you!
      </p>

      <footer>
        <center>
          <p1 class="ftext"
            >This email was sent to you by: BUMPIE<br />
            <br />
            You are receiving this email because you recently<br />
            signed up for our services.<br />
            <br />
            © 2020 BUMPIE. All Rights Reserved.
          </p1>
        </center>
      </footer>
    </div>
  </body>
</html>
`;
