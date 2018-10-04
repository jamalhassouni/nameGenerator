document.querySelector("#generate-names").addEventListener("submit", loadNames);

// Execute the function to query the Api

function loadNames(e) {
	e.preventDefault();

	// Read the values from the form and create the variables

	const origin = document.getElementById("country").value;
	const genre = document.getElementById("genre").value;
	const amount = document.getElementById("quantity").value;

	// Build the URL

	let url = "https://uinames.com/api/?";

	// Read the origin and append to the url

	if (origin !== "") {
		url += `region=${origin}&`;
	}

	// Read the genre and append to the url

	if (genre !== "") {
		url += `gender=${genre}&`;
	}

	// Read the amount and append to the url

	if (amount !== "") {
		url += `amount=${amount}&`;
	}

	// Fetch Api
	fetch(url)
		.then(function(response) {
			return response.json();
		})
		.then(function(names) {
			let html = "<h2>Generated Names</h2>";
			html += '<ul class="list">';
			names.forEach(function(data) {
				html += `
                 <li>${data.name}</li>
              `;
			});

			html += "</ul>";

			document.querySelector("#result").innerHTML = html;
		})
		.catch(function(error) {
			console.log(error);
		});
}
