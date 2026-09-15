document.getElementById("profileForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        let name =
            document.getElementById("nameInput").value.trim();

        let email =
            document.getElementById("emailInput").value.trim();

        let age =
            Number(document.getElementById("ageInput").value);

        let major =
            document.getElementById("majorInput").value.trim();

        let graduation =
            Number(document.getElementById("graduationInput").value);

        let interest =
            document.getElementById("interestInput").value;

        let experience =
            Number(document.getElementById("experienceInput").value);

        let introduction =
            document.getElementById("introductionInput").value.trim();

        let nameInput =
            document.getElementById("nameInput");

        let emailInput =
            document.getElementById("emailInput");

        let ageInput =
            document.getElementById("ageInput");

        let majorInput =
            document.getElementById("majorInput");

        let graduationInput =
            document.getElementById("graduationInput");

        let interestInput =
            document.getElementById("interestInput");

        let experienceInput =
            document.getElementById("experienceInput");

        let introductionInput =
            document.getElementById("introductionInput");

        let messageArea =
            document.getElementById("messageArea");

        let profileSummary =
            document.getElementById("profileSummary");

        let valid = true;
        let messages = "";

        if (name === "") {
            nameInput.classList.add("error");
            nameInput.classList.remove("success");
            messages += "Please enter your full name.\n";
            valid = false;
        } else {
            nameInput.classList.add("success");
            nameInput.classList.remove("error");
        }

        if (email === "" || !email.includes("@")) {
            emailInput.classList.add("error");
            emailInput.classList.remove("success");
            messages += "Please enter an email containing @.\n";
            valid = false;
        } else {
            emailInput.classList.add("success");
            emailInput.classList.remove("error");
        }

        if (age < 18 || age >= 100) {
            ageInput.classList.add("error");
            ageInput.classList.remove("success");
            messages += "Age must be between 18 and 99.\n";
            valid = false;
        } else {
            ageInput.classList.add("success");
            ageInput.classList.remove("error");
        }

        if (major === "") {
            majorInput.classList.add("error");
            majorInput.classList.remove("success");
            messages += "Please enter your major.\n";
            valid = false;
        } else {
            majorInput.classList.add("success");
            majorInput.classList.remove("error");
        }

        if (graduation < 2026 || graduation > 2032) {
            graduationInput.classList.add("error");
            graduationInput.classList.remove("success");
            messages +=
                "Graduation year must be between 2026 and 2032.\n";
            valid = false;
        } else {
            graduationInput.classList.add("success");
            graduationInput.classList.remove("error");
        }

        if (interest === "") {
            interestInput.classList.add("error");
            interestInput.classList.remove("success");
            messages += "Please select a project interest.\n";
            valid = false;
        } else {
            interestInput.classList.add("success");
            interestInput.classList.remove("error");
        }

        if (experience < 0 || experience > 10) {
            experienceInput.classList.add("error");
            experienceInput.classList.remove("success");
            messages +=
                "Programming experience must be between 0 and 10 years.\n";
            valid = false;
        } else {
            experienceInput.classList.add("success");
            experienceInput.classList.remove("error");
        }

        if (introduction.length < 20) {
            introductionInput.classList.add("error");
            introductionInput.classList.remove("success");
            messages +=
                "Introduction must have at least 20 characters.\n";
            valid = false;
        } else {
            introductionInput.classList.add("success");
            introductionInput.classList.remove("error");
        }

        if (valid === true) {
            messageArea.textContent =
                "Your information is valid. Profile created successfully.";

            messageArea.classList.add("success-message");
            messageArea.classList.remove("error-message");

            profileSummary.textContent =
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Age: " + age + "\n" +
                "Major: " + major + "\n" +
                "Expected Graduation Year: " + graduation + "\n" +
                "Project Interest: " + interest + "\n" +
                "Programming Experience: " +
                experience + " year(s)\n" +
                "Introduction: " + introduction;
        } else {
            messageArea.textContent = messages;

            messageArea.classList.add("error-message");
            messageArea.classList.remove("success-message");

            profileSummary.textContent =
                "Correct the highlighted fields to create your profile.";
        }
    });