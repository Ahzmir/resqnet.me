document.addEventListener('DOMContentLoaded', function() {
    const educationContainer = document.getElementById('education-content');

    // API URL and parameters
    const apiUrl = 'https://api.reliefweb.int/v1/reports';
    const params = {
        appname: 'resqnet',
        profile: 'full',
        limit: 5 // Adjust the limit as needed
    };

    async function fetchEducationData() {
        try {
            const response = await fetch(`${apiUrl}?appname=${params.appname}&profile=${params.profile}&limit=${params.limit}`);
            const data = await response.json();

            if (data.data && data.data.length > 0) {
                data.data.forEach(report => {
                    const reportElement = document.createElement('div');
                    reportElement.classList.add('report');
                    reportElement.innerHTML = `
                        <h3>${report.fields.title}</h3>
                        <p>${report.fields.body}</p>
                        <a href="${report.fields.url}" target="_blank">Read more</a>
                    `;
                    educationContainer.appendChild(reportElement);
                });
            } else {
                educationContainer.innerHTML = '<p>No education and training reports found.</p>';
            }
        } catch (error) {
            educationContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        }
    }

    // Fetch the data
    fetchEducationData();
});
