document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            
            if (name && email && phone && password) {
                document.getElementById('successMessage').style.display = 'block';
      
                setTimeout(() => {
                    document.getElementById('contactForm').reset();
                    document.getElementById('successMessage').style.display = 'none';
                }, 3000);
            }
        });
        
        let map;
        let marker;
        let circle;
        
        document.getElementById('locationBtn').addEventListener('click', function() {
            const locationInfo = document.getElementById('locationInfo');
            locationInfo.textContent = 'Getting your location...';
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        
                        if (!map) {
                            map = L.map('map').setView([latitude, longitude], 15);
                            
                            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                maxZoom: 19,
                                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            }).addTo(map);
                        } else {
                            map.setView([latitude, longitude], 15);
                        }
                        if (marker) {
                            map.removeLayer(marker);
                        }
                        if (circle) {
                            map.removeLayer(circle);
                        }
           
                        marker = L.marker([latitude, longitude]).addTo(map)
                            .bindPopup('You are here!')
                            .openPopup();
                        
                        circle = L.circle([latitude, longitude], {
                            color: '#6c5ce7',
                            fillColor: '#a29bfe',
                            fillOpacity: 0.3,
                            radius: 100
                        }).addTo(map);
                        
                        locationInfo.innerHTML = `
                            <strong>Your Location:</strong><br>
                            Latitude: ${latitude.toFixed(6)}<br>
                            Longitude: ${longitude.toFixed(6)}
                        `;
                    },
                    function(error) {
                        console.error('Error getting location:', error);
                        locationInfo.textContent = 'Unable to retrieve your location. Please check your browser permissions.';
                    }
                );
            } else {
                locationInfo.textContent = 'Geolocation is not supported by this browser.';
            }
        });