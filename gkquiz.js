const questions = [

    {
        question: "What is the national language of Afghanistan?",
        options: ["Pashto", "Dari", "Uzbek", "Farsi"],
        answer: "Dari"
    },
    {
        question: "What is the national language of Argentina?",
        options: ["Portuguese", "Spanish", "Italian", "English"],
        answer: "Spanish"
    },
    {
        question: "What is the national language of Australia?",
        options: ["Aboriginal", "Dutch", "English", "Australian"],
        answer: "English"
    },
    {
        question: "What is the national language of Belgium?",
        options: ["French", "Dutch", "German", "English"],
        answer: "Dutch"
    },
    {
        question: "What is the national language of Brazil?",
        options: ["Italian", "Portuguese", "Spanish", "English"],
        answer: "Portuguese"
    },
    {
        question: "What is the national language of Canada?",
        options: ["Spanish", "French", "Italian", "English"],
        answer: "English"
    },
    {
        question: "What is the national language of China?",
        options: ["Mandarin", "Cantonese", "Tibetan", "English"],
        answer: "Mandarin"
    },
    {
        question: "What is the national language of France?",
        options: ["French", "Spanish", "Italian", "Portuguese"],
        answer: "French"
    },
    {
        question: "What is the national language of India?",
        options: ["Hindi", "Bengali", "Tamil", "Urdu"],
        answer: "Hindi"
    },
    {
        question: "What is the national language of Italy?",
        options: ["French", "Spanish", "Italian", "English"],
        answer: "Italian"
    },
    {
        question: "What is the national language of Japan?",
        options: ["Mandarin", "Japanese", "Korean", "Vietnamese"],
        answer: "Japanese"
    },
    {
        question: "What is the national language of Mexico?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Spanish"
    },
    {
        question: "What is the national language of Russia?",
        options: ["Kazakh", "Russian", "Ukrainian", "Tatar"],
        answer: "Russian"
    },
    {
        question: "What is the national language of South Africa?",
        options: ["Xhosa", "Zulu", "Afrikaans", "English"],
        answer: "Zulu"
    },
    {
        question: "What is the national language of Spain?",
        options: ["Catalan", "Basque", "Spanish", "Galician"],
        answer: "Spanish"
    },
    {
        question: "What is the national language of Sweden?",
        options: ["Swedish", "Norwegian", "Danish", "Finnish"],
        answer: "Swedish"
    },
    {
        question: "What is the national language of the United Kingdom?",
        options: ["English", "Welsh", "Scots Gaelic", "Irish"],
        answer: "English"
    },
    {
        question: "What is the national language of the United States?",
        options: ["English", "Spanish", "French", "German"],
        answer: "English"
    },
    {
        question: "What is the national language of Zimbabwe?",
        options: ["Afrikaans", "Shona", "English", "Ndebele"],
        answer: "Shona"
    },
    {
        question: "What is the national language of Egypt?",
        options: ["Arabic", "Hebrew", "Turkish", "Farsi"],
        answer: "Arabic"
    },
    {
        question: "What is the national language of Nigeria?",
        options: ["Hausa", "Yoruba", "Igbo", "English"],
        answer: "English"
    },
    {
        question: "What is the national language of Thailand?",
        options: ["Thai", "Burmese", "Cambodian", "Lao"],
        answer: "Thai"
    },
    {
        question: "What is the national language of Turkey?",
        options: ["Turkish", "Arabic", "Farsi", "Kurdish"],
        answer: "Turkish"
    },
    {
        question: "What is the national language of South Korea?",
        options: ["Korean", "Chinese", "Japanese", "English"],
        answer: "Korean"
    },
    {
        question: "What is the national language of New Zealand?",
        options: ["Maori", "English", "Samoan", "Fijian"],
        answer: "English"
    },
    {
        question: "What is the national language of Saudi Arabia?",
        options: ["Arabic", "Farsi", "English", "Urdu"],
        answer: "Arabic"
    },
    {
        question: "What is the national language of Iran?",
        options: ["Arabic", "Farsi", "Kurdish", "Turkish"],
        answer: "Farsi"
    },
    {
        question: "What is the national language of Colombia?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Spanish"
    },
    {
        question: "What is the national language of Kenya?",
        options: ["Swahili", "English", "Hindu", "Maasai"],
        answer: "Swahili"
    },
    {
        question: "What is the national language of Indonesia?",
        options: ["Javanese", "Sundanese", "Indonesian", "Balinese"],
        answer: "Indonesian"
    },
    {
        question: "What is the national language of Switzerland?",
        options: ["German", "French", "Italian", "Romansh"],
        answer: "German"
    },
    {
        question: "What is the national language of Pakistan?",
        options: ["Punjabi", "Urdu", "Pashto", "Sindhi"],
        answer: "Urdu"
    },
    {
        question: "What is the national language of Egypt?",
        options: ["Arabic", "Hebrew", "Turkish", "Farsi"],
        answer: "Arabic"
    },
    {
        question: "What is the national language of Nigeria?",
        options: ["Hausa", "Igbo", "Yoruba", "English"],
        answer: "English"
    },
    


    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan"
    },
    {
        question: "Which country is known as the Land of Thunderbolt?",
        options: ["Nepal", "Bhutan", "Mongolia", "Tibet"],
        answer: "Bhutan"
    },
    {
        question: "Which country is known as the Land of the Free?",
        options: ["Brazil", "Thailand", "United States", "Mexico"],
        answer: "United States"
    },
    {
        question: "Which country is known as the Land of the Long White Cloud?",
        options: ["Australia", "New Zealand", "Fiji", "Samoa"],
        answer: "New Zealand"
    },
    {
        question: "Which country is known as the Land of a Thousand Hills?",
        options: ["Uganda", "Rwanda", "Kenya", "Tanzania"],
        answer: "Rwanda"
    },
    {
        question: "Which country is known as the Land of Ice and Fire?",
        options: ["Iceland", "Norway", "Greenland", "Sweden"],
        answer: "Iceland"
    },
    {
        question: "Which country is known as the Land of Maple Leaf?",
        options: ["Canada", "USA", "Norway", "Australia"],
        answer: "Canada"
    },
    {
        question: "Which country is known as the Land of Milk and Honey?",
        options: ["Israel", "Egypt", "Saudi Arabia", "Lebanon"],
        answer: "Israel"
    },
    {
        question: "Which country is known as the Land of the Pharaohs?",
        options: ["Greece", "Rome", "Egypt", "Turkey"],
        answer: "Egypt"
    },
    {
        question: "Which country is known as the Land of Spices?",
        options: ["India", "Indonesia", "Brazil", "Sri Lanka"],
        answer: "India"
    },
    {
        question: "Which country is known as the Land of Eternal Spring?",
        options: ["Mexico", "Guatemala", "Honduras", "Costa Rica"],
        answer: "Guatemala"
    },
    {
        question: "Which country is known as the Land of the Rising Moon?",
        options: ["Japan", "China", "Korea", "Vietnam"],
        answer: "Japan"
    },
    {
        question: "Which country is known as the Land of Snow?",
        options: ["Canada", "Russia", "Finland", "Norway"],
        answer: "Finland"
    },
    {
        question: "Which country is known as the Land of the Thunder Dragon?",
        options: ["Bhutan", "Nepal", "China", "India"],
        answer: "Bhutan"
    },
    {
        question: "Which country is known as the Land of the Vikings?",
        options: ["Denmark", "Sweden", "Norway", "Iceland"],
        answer: "Norway"
    },
    {
        question: "Which country is known as the Land of the Long Reach?",
        options: ["Australia", "USA", "Canada", "Russia"],
        answer: "Australia"
    },
    {
        question: "Which country is known as the Land of Giants?",
        options: ["USA", "Ireland", "China", "Italy"],
        answer: "Ireland"
    },
    {
        question: "Which country is known as the Land of Contrasts?",
        options: ["Brazil", "Argentina", "Chile", "Peru"],
        answer: "Chile"
    },
    {
        question: "Which country is known as the Land of Lakes?",
        options: ["Finland", "Sweden", "Canada", "Russia"],
        answer: "Finland"
    },
    {
        question: "Which country is known as the Land of a Thousand Temples?",
        options: ["India", "Thailand", "Cambodia", "Myanmar"],
        answer: "Cambodia"
    },
    {
        question: "Which country is known as the Land of Fire and Ice?",
        options: ["Iceland", "Greenland", "Norway", "Russia"],
        answer: "Iceland"
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Finland", "Iceland", "Norway", "Sweden"],
        answer: "Norway"
    },
    {
        question: "Which country is known as the Land of the Lost City?",
        options: ["Mexico", "Peru", "Colombia", "Brazil"],
        answer: "Peru"
    },
    {
        question: "Which country is known as the Land of the Free and the Home of the Brave?",
        options: ["United Kingdom", "Canada", "USA", "Australia"],
        answer: "USA"
    },
    {
        question: "Which country is known as the Land of the Blue Sky?",
        options: ["Mongolia", "China", "India", "Nepal"],
        answer: "Mongolia"
    },
    {
        question: "Which country is known as the Land of Tulips?",
        options: ["Belgium", "Germany", "Netherlands", "France"],
        answer: "Netherlands"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        answer: "Japan"
    },
    {
        question: "Which country is known as the Land of Rich Culture?",
        options: ["Egypt", "Italy", "Greece", "Spain"],
        answer: "Italy"
    },
    {
        question: "Which country is known as the Land of Endless Summer?",
        options: ["Brazil", "Australia", "Hawaii", "Costa Rica"],
        answer: "Hawaii"
    },
    {
        question: "Which country is known as the Land of the Black Mountains?",
        options: ["Bhutan", "Nepal", "Switzerland", "Austria"],
        answer: "Switzerland"
    },
    {
        question: "Which country is known as the Land of No Sun?",
        options: ["Norway", "Iceland", "Finland", "Russia"],
        answer: "Iceland"
    },
    {
        question: "Which country is known as the Land of Wild Beauty?",
        options: ["Australia", "Canada", "New Zealand", "South Africa"],
        answer: "New Zealand"
    },
    {
        question: "Which country is known as the Land of 10,000 Lakes?",
        options: ["Canada", "Finland", "Russia", "Sweden"],
        answer: "Finland"
    },
    {
        question: "Which country is known as the Land of Dragons?",
        options: ["Wales", "China", "Japan", "Thailand"],
        answer: "Wales"
    },
    {
        question: "Which country is known as the Land of Mountains?",
        options: ["Nepal", "India", "China", "Tibet"],
        answer: "Nepal"
    },
    {
        question: "Which country is known as the Land of the Red Dragon?",
        options: ["Wales", "China", "South Korea", "Vietnam"],
        answer: "Wales"
    },
    {
        question: "Which country is known as the Land of the Rising Stars?",
        options: ["USA", "Japan", "Brazil", "France"],
        answer: "Japan"
    },
    {
        question: "Which country is known as the Land of the Caribou?",
        options: ["Canada", "Greenland", "Russia", "Norway"],
        answer: "Canada"
    },
    {
        question: "Which country is known as the Land of the Thunderstorm?",
        options: ["USA", "Brazil", "India", "Honduras"],
        answer: "USA"
    },
    {
        question: "Which country is known as the Land of Sugarcane?",
        options: ["Brazil", "India", "Cuba", "Haiti"],
        answer: "Cuba"
    },
    {
        question: "Which country is known as the Land of Salt?",
        options: ["Mexico", "Chile", "Peru", "Bolivia"],
        answer: "Chile"
    },
    {
        question: "Which country is known as the Land of Pines?",
        options: ["Finland", "Sweden", "Norway", "Canada"],
        answer: "Finland"
    },
    {
        question: "Which country is known as the Land of Thunder?",
        options: ["Bhutan", "Nepal", "India", "Thailand"],
        answer: "Nepal"
    },

    {
        question: "Who discovered America?",
        options: ["Leif Erikson", "Marco Polo", "Christopher Columbus", "Ferdinand Magellan"],
        answer: "Christopher Columbus"
    },
    {
        question: "Who discovered the planet Pluto?",
        options: ["Johannes Kepler", "Clyde Tombaugh", "Galileo Galilei", "Isaac Newton"],
        answer: "Clyde Tombaugh"
    },
    {
        question: "Who invented the fountain pen?",
        options: ["Henry Ford", "Lewis Waterman", "Alexander Graham Bell", "John Penrose"],
        answer: "Lewis Waterman"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Joseph Lister", "Louis Pasteur", "Alexander Fleming", "Marie Curie"],
        answer: "Alexander Fleming"
    },
    {
        question: "Who invented the telephone?",
        options: ["Guglielmo Marconi", "Nikola Tesla", "Thomas Edison", "Alexander Graham Bell"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Who discovered the law of gravity?",
        options: ["Albert Einstein", "Nikola Tesla", "Isaac Newton", "Galileo Galilei"],
        answer: "Isaac Newton"
    },
    {
        question: "Who discovered the structure of DNA?",
        options: ["Louis Pasteur", "James Watson and Francis Crick", "Charles Darwin", "Gregor Mendel"],
        answer: "James Watson and Francis Crick"
    },
    {
        question: "Who invented the lightbulb?",
        options: ["Benjamin Franklin", "Nikola Tesla", "Alessandro Volta", "Thomas Edison"],
        answer: "Thomas Edison"
    },
    {
        question: "Who invented the airplane?",
        options: ["Leonardo da Vinci", "Charles Lindbergh", "Igor Sikorsky", "Wright Brothers"],
        answer: "Wright Brothers"
    },
    {
        question: "Who discovered the electron?",
        options: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "Albert Einstein"],
        answer: "J.J. Thomson"
    },
    {
        question: "Who discovered the theory of evolution?",
        options: ["Jean-Baptiste Lamarck", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"],
        answer: "Charles Darwin"
    },
    {
        question: "Who invented the printing press?",
        options: ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "Martin Luther"],
        answer: "Johannes Gutenberg"
    },
    {
        question: "Who discovered the heliocentric model of the solar system?",
        options: ["Galileo Galilei", "Johannes Kepler", "Nicolaus Copernicus", "Isaac Newton"],
        answer: "Nicolaus Copernicus"
    },
    {
        question: "Who invented the computer?",
        options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Thomas Edison"],
        answer: "Charles Babbage"
    },
    {
        question: "Who discovered the laws of motion?",
        options: ["Nikola Tesla", "Albert Einstein", "Isaac Newton", "Galileo Galilei"],
        answer: "Isaac Newton"
    },
    {
        question: "Who invented the first practical automobile?",
        options: ["Ransom Olds", "Karl Benz", "Wilhelm Maybach", "Henry Ford"],
        answer: "Karl Benz"
    },
    {
        question: "Who discovered the circulation of blood?",
        options: ["William Harvey", "Galen", "Hippocrates", "Andreas Vesalius"],
        answer: "William Harvey"
    },
    {
        question: "Who discovered the element oxygen?",
        options: ["Marie Curie", "Joseph Priestley", "Antoine Lavoisier", "Dmitri Mendeleev"],
        answer: "Joseph Priestley"
    },
    {
        question: "Who invented the steam engine?",
        options: ["Thomas Newcomen", "Richard Trevithick", "James Watt", "George Stephenson"],
        answer: "James Watt"
    },
    {
        question: "Who invented the television?",
        options: ["Philo Farnsworth", "Guglielmo Marconi", "John Logie Baird", "Nikola Tesla"],
        answer: "John Logie Baird"
    },
    {
        question: "Who invented the first successful parachute?",
        options: ["Emile Pladner", "Louis-Sébastien Lenormand", "Leonardo da Vinci", "George Everest"],
        answer: "Louis-Sébastien Lenormand"
    },
    {
        question: "Who invented the sewing machine?",
        options: ["Charles Babbage", "Isaac Singer", "Elias Howe", "George Eastman"],
        answer: "Elias Howe"
    },
    {
        question: "Who discovered the planet Neptune?",
        options: ["William Herschel", "Edmond Halley", "Johann Gottfried Galle", "Galileo Galilei"],
        answer: "Johann Gottfried Galle"
    },
    {
        question: "Who invented the microwave oven?",
        options: ["Nikola Tesla", "Percy Spencer", "James Watt", "Alessandro Volta"],
        answer: "Percy Spencer"
    },
    {
        question: "Who invented the first battery?",
        options: ["Dmitri Mendeleev", "Alessandro Volta", "Michael Faraday", "Thomas Edison"],
        answer: "Alessandro Volta"
    },
    {
        question: "Who invented the hot air balloon?",
        options: ["Charles Darwin", "Brothers Montgolfier", "James Watt", "William Bell"],
        answer: "Brothers Montgolfier"
    },
    {
        question: "Who discovered the first antibiotic, penicillin?",
        options: ["Marie Curie", "Joseph Lister", "Louis Pasteur", "Alexander Fleming"],
        answer: "Alexander Fleming"
    },
    {
        question: "Who invented the camera?",
        options: ["George Eastman", "Louis Daguerre", "Joseph Nicéphore Niépce", "Eadweard Muybridge"],
        answer: "Joseph Nicéphore Niépce"
    },
    {
        question: "Who discovered the planet Uranus?",
        options: ["Edmond Halley", "William Herschel", "Galileo Galilei", "Johannes Kepler"],
        answer: "William Herschel"
    },
    {
        question: "Who invented the gas mask?",
        options: ["Wright brothers", "Garrett Morgan", "Nikola Tesla", "Thomas Edison"],
        answer: "Garrett Morgan"
    },
    {
        question: "Who invented the first electric motor?",
        options: ["Alessandro Volta", "Nikola Tesla", "James Watt", "Michael Faraday"],
        answer: "Michael Faraday"
    },
    {
        question: "Who discovered the first vaccine for smallpox?",
        options: ["Edward Jenner", "Louis Pasteur", "Ignaz Semmelweis", "Joseph Lister"],
        answer: "Edward Jenner"
    },
    {
        question: "Who discovered the law of conservation of mass?",
        options: ["Isaac Newton", "Antoine Lavoisier", "Marie Curie", "Dmitri Mendeleev"],
        answer: "Antoine Lavoisier"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Who invented the typewriter?",
        options: ["Blaise Pascal", "Christopher Latham Sholes", "James Watt", "Thomas Edison"],
        answer: "Christopher Latham Sholes"
    },
    {
        question: "Who discovered the law of motion?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
        answer: "Isaac Newton"
    },
    {
        question: "Who invented the practical automobile?",
        options: ["Henry Ford", "Ransom Olds", "Karl Benz", "Wilhelm Maybach"],
        answer: "Karl Benz"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Benjamin Franklin", "Alessandro Volta", "Thomas Edison"],
        answer: "Thomas Edison"
    },




    {
        question: "What is the sum of all the angles in a triangle?",
        options: ["360 degrees", "180 degrees", "270 degrees", "90 degrees"],
        answer: "180 degrees"
    },
    {
        question: "What is the value of pi (π) to 3 decimal places?",
        options: ["3.142", "3.141", "3.145", "3.140"],
        answer: "3.141"
    },
    {
        question: "If a circle has a radius of 7 cm, what is its circumference? (Use π ≈ 3.14)",
        options: ["43.96 cm", "42.00 cm", "44.00 cm", "43.00 cm"],
        answer: "43.96 cm"
    },
    {
        question: "What is the area of a circle with a radius of 5 cm? (Use π ≈ 3.14)",
        options: ["78.0 cm²", "70.0 cm²", "78.5 cm²", "80.0 cm²"],
        answer: "78.5 cm²"
    },
    {
        question: "If the sum of two numbers is 72, and one number is 18, what is the other number?",
        options: ["50", "56", "54", "62"],
        answer: "54"
    },
    {
        question: "What is the square root of 144?",
        options: ["14", "12", "16", "10"],
        answer: "12"
    },
    {
        question: "How many sides does a dodecagon have?",
        options: ["12", "14", "16", "10"],
        answer: "12"
    },
    {
        question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
        options: ["45 cm²", "40 cm²", "48 cm²", "35 cm²"],
        answer: "40 cm²"
    },
    {
        question: "What is the cube root of 512?",
        options: ["7", "8", "6", "9"],
        answer: "8"
    },
    {
        question: "If a triangle has sides 6 cm, 8 cm, and 10 cm, is it a right-angled triangle?",
        options: ["Yes", "Maybe", "Not enough information", "No"],
        answer: "Yes"
    },
    {
        question: "How many degrees are there in a right angle?",
        options: ["45 degrees", "90 degrees", "60 degrees", "180 degrees"],
        answer: "90 degrees"
    },
    {
        question: "What is the value of 2 to the power of 5?",
        options: ["16", "32", "8", "64"],
        answer: "32"
    },
    {
        question: "What is the perimeter of a square with a side length of 7 cm?",
        options: ["28 cm", "30 cm", "35 cm", "40 cm"],
        answer: "28 cm"
    },
    {
        question: "What is the next prime number after 29?",
        options: ["33", "37", "31", "35"],
        answer: "31"
    },
    {
        question: "What is the area of a triangle with a base of 10 cm and height of 6 cm?",
        options: ["60 cm²", "40 cm²", "30 cm²", "50 cm²"],
        answer: "30 cm²"
    },
    {
        question: "If you multiply a number by 9 and then subtract 18, the result is 54. What is the number?",
        options: ["8", "6", "7", "5"],
        answer: "8"
    },
    {
        question: "If a car travels 60 miles per hour for 2 hours, how far will it travel?",
        options: ["110 miles", "120 miles", "130 miles", "100 miles"],
        answer: "120 miles"
    },
    {
        question: "What is the value of 15% of 200?",
        options: ["25", "40", "50", "30"],
        answer: "30"
    },
    {
        question: "A train moves at 60 km/h. How far will it travel in 2.5 hours?",
        options: ["150 km", "140 km", "180 km", "200 km"],
        answer: "150 km"
    },
    {
        question: "What is the least common multiple (LCM) of 12 and 15?",
        options: ["30", "60", "45", "20"],
        answer: "60"
    },
    {
        question: "How many different ways can 5 people line up for a photograph?",
        options: ["100", "120", "150", "110"],
        answer: "120"
    },
    {
        question: "How many degrees are there in a full circle?",
        options: ["360 degrees", "270 degrees", "400 degrees", "180 degrees"],
        answer: "360 degrees"
    },
    {
        question: "If you roll a fair six-sided die, what is the probability of rolling a number greater than 4?",
        options: ["2/3", "1/2", "1/3", "1/6"],
        answer: "1/3"
    },
    {
        question: "If the sum of two numbers is 100, and one number is 45, what is the other number?",
        options: ["50", "55", "56", "60"],
        answer: "55"
    },
    {
        question: "What is the median of the following set of numbers: 2, 4, 6, 8, 10?",
        options: ["6", "7", "5", "8"],
        answer: "6"
    },
    {
        question: "How many zeros are there in one million?",
        options: ["5", "7", "6", "8"],
        answer: "6"
    },
    {
        question: "What is the value of 100 divided by 4?",
        options: ["25", "30", "24", "22"],
        answer: "25"
    },
    {
        question: "What is the total cost of 3 items that cost $15, $30, and $45 respectively?",
        options: ["$85", "$90", "$100", "$95"],
        answer: "$90"
    },
    {
        question: "What is the square of 15?",
        options: ["250", "210", "225", "200"],
        answer: "225"
    },
    {
        question: "What is the sum of the first 10 prime numbers?",
        options: ["131", "137", "129", "135"],
        answer: "129"
    },
    {
        question: "What is the next number in this sequence: 2, 6, 12, 20, 30, ___?",
        options: ["38", "42", "40", "36"],
        answer: "42"
    },
    {
        question: "What is the perimeter of a circle with a radius of 14 cm? (Use π ≈ 3.14)",
        options: ["84.50 cm", "87.92 cm", "80.72 cm", "88.00 cm"],
        answer: "87.92 cm"
    },
    {
        question: "What is the area of a rectangle with length 25 cm and width 10 cm?",
        options: ["250 cm²", "220 cm²", "200 cm²", "210 cm²"],
        answer: "250 cm²"
    },
    {
        question: "If you invest $100 at a 5% annual interest rate, what will the total amount be after 1 year?",
        options: ["$105", "$120", "$110", "$115"],
        answer: "$105"
    },
    {
        question: "What is the sum of the interior angles of a pentagon?",
        options: ["360 degrees", "540 degrees", "180 degrees", "270 degrees"],
        answer: "540 degrees"
    },
    {
        question: "What is the total number of diagonals in a hexagon?",
        options: ["9", "12", "15", "10"],
        answer: "9"
    },
    {
        question: "What is 25% of 400?",
        options: ["75", "100", "125", "50"],
        answer: "100"
    },
    {
        question: "How many different ways can you arrange the letters in the word ‘MATH’?",
        options: ["32", "16", "12", "24"],
        answer: "24"
    },
    {
        question: "What is the volume of a cube with a side length of 3 cm?",
        options: ["30 cm³", "25 cm³", "28 cm³", "27 cm³"],
        answer: "27 cm³"
    },
    {
        question: "What is the area of a right triangle with a base of 6 cm and a height of 8 cm?",
        options: ["48 cm²", "24 cm²", "32 cm²", "30 cm²"],
        answer: "24 cm²"
    },
    {
        question: "What is the value of 7 factorial (7!)?",
        options: ["3500", "5040", "720", "7000"],
        answer: "5040"
    },
    {
        question: "What is the least common multiple (LCM) of 5, 10, and 15?",
        options: ["20", "30", "35", "25"],
        answer: "30"
    },
    {
        question: "What is the perimeter of a triangle with sides of lengths 3 cm, 4 cm, and 5 cm?",
        options: ["12 cm", "14 cm", "13 cm", "15 cm"],
        answer: "12 cm"
    },
    
    

    {
        question: "What is the symbol for the element oxygen?",
        options: ["O", "O2", "Ox", "Om"],
        answer: "O"
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["6", "8", "7", "4"],
        answer: "6"
    },
    {
        question: "What is the atomic number of hydrogen?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "What is the symbol for the element gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: "Au"
    },
    {
        question: "What is the element with the atomic number 79?",
        options: ["Gold", "Platinum", "Silver", "Iron"],
        answer: "Gold"
    },
    {
        question: "What is the symbol for the element sodium?",
        options: ["Na", "So", "Ns", "Nd"],
        answer: "Na"
    },
    {
        question: "What is the name of the element with symbol Fe?",
        options: ["Iron", "Fluorine", "Francium", "Flerovium"],
        answer: "Iron"
    },
    {
        question: "What is the atomic number of neon?",
        options: ["10", "12", "14", "8"],
        answer: "10"
    },
    {
        question: "What is the symbol for the element potassium?",
        options: ["K", "P", "Ka", "Po"],
        answer: "K"
    },
    {
        question: "What is the element with the atomic number 26?",
        options: ["Iron", "Copper", "Zinc", "Nickel"],
        answer: "Iron"
    },
    {
        question: "What is the atomic number of helium?",
        options: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "What is the symbol for the element calcium?",
        options: ["Ca", "Cl", "Cu", "Co"],
        answer: "Ca"
    },
    {
        question: "What is the name of the element with atomic number 14?",
        options: ["Silicon", "Carbon", "Oxygen", "Nitrogen"],
        answer: "Silicon"
    },
    {
        question: "What is the atomic number of sulfur?",
        options: ["16", "18", "14", "12"],
        answer: "16"
    },
    {
        question: "What is the symbol for the element silver?",
        options: ["Ag", "Au", "As", "Sb"],
        answer: "Ag"
    },
    {
        question: "What is the atomic number of nitrogen?",
        options: ["7", "8", "9", "6"],
        answer: "7"
    },
    {
        question: "What is the name of the element with symbol Hg?",
        options: ["Mercury", "Manganese", "Magnesium", "Molybdenum"],
        answer: "Mercury"
    },
    {
        question: "What is the atomic number of argon?",
        options: ["18", "20", "22", "24"],
        answer: "18"
    },
    {
        question: "What is the symbol for the element aluminum?",
        options: ["Al", "Am", "An", "At"],
        answer: "Al"
    },
    {
        question: "What is the name of the element with atomic number 8?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"],
        answer: "Oxygen"
    },
    {
        question: "What is the symbol for the element mercury?",
        options: ["Hg", "Me", "Mc", "Mm"],
        answer: "Hg"
    },
    {
        question: "What is the atomic number of fluorine?",
        options: ["9", "10", "11", "8"],
        answer: "9"
    },
    {
        question: "What is the name of the element with atomic number 18?",
        options: ["Argon", "Neon", "Krypton", "Xenon"],
        answer: "Argon"
    },
    {
        question: "What is the atomic number of chlorine?",
        options: ["17", "19", "20", "15"],
        answer: "17"
    },
    {
        question: "What is the symbol for the element copper?",
        options: ["Cu", "Co", "Cn", "Cr"],
        answer: "Cu"
    },
    {
        question: "What is the atomic number of zinc?",
        options: ["30", "31", "32", "33"],
        answer: "30"
    },
    {
        question: "What is the name of the element with symbol Sn?",
        options: ["Tin", "Titanium", "Sulfur", "Sodium"],
        answer: "Tin"
    },
    {
        question: "What is the atomic number of phosphorus?",
        options: ["15", "16", "17", "14"],
        answer: "15"
    },
    {
        question: "What is the symbol for the element nitrogen?",
        options: ["N", "Na", "Ne", "Ni"],
        answer: "N"
    },
    {
        question: "What is the atomic number of iodine?",
        options: ["53", "54", "55", "56"],
        answer: "53"
    },
    {
        question: "What is the element with the atomic number 20?",
        options: ["Calcium", "Magnesium", "Potassium", "Sodium"],
        answer: "Calcium"
    },
    {
        question: "What is the symbol for the element lead?",
        options: ["Pb", "Pd", "Pt", "Po"],
        answer: "Pb"
    },
    {
        question: "What is the name of the element with atomic number 19?",
        options: ["Potassium", "Sodium", "Calcium", "Magnesium"],
        answer: "Potassium"
    },
    {
        question: "What is the atomic number of radon?",
        options: ["86", "87", "88", "85"],
        answer: "86"
    },
    {
        question: "What is the name of the element with symbol W?",
        options: ["Tungsten", "Iron", "Copper", "Zinc"],
        answer: "Tungsten"
    },
    {
        question: "What is the atomic number of lithium?",
        options: ["3", "4", "5", "6"],
        answer: "3"
    },
    {
        question: "What is the symbol for the element platinum?",
        options: ["Pt", "Pl", "Pd", "Pa"],
        answer: "Pt"
    },
    {
        question: "What is the element with the atomic number 92?",
        options: ["Uranium", "Plutonium", "Radium", "Thorium"],
        answer: "Uranium"
    },
    {
        question: "What is the symbol for the element francium?",
        options: ["Fr", "Fa", "Fm", "Fn"],
        answer: "Fr"
    },
    {
        question: "What is the atomic number of radium?",
        options: ["88", "89", "90", "91"],
        answer: "88"
    },
    {
        question: "What is the element with the atomic number 35?",
        options: ["Chlorine", "Phosphorus", "Sulfur", "Oxygen"],
        answer: "Chlorine"
    },
    {
        question: "What is the atomic number of krypton?",
        options: ["36", "37", "38", "39"],
        answer: "36"
    },
    {
        question: "What is the symbol for the element tin?",
        options: ["Sn", "Si", "Sb", "Ti"],
        answer: "Sn"
    },
    {
        question: "What is the element with the atomic number 26?",
        options: ["Iron", "Zinc", "Copper", "Nickel"],
        answer: "Iron"
    },

    {
        question: "Which element has the atomic number 118?",
        options: ["Oganesson", "Livermorium", "Tennessine", "Moscovium"],
        answer: "Oganesson"
    },
    {
        question: "What is the symbol for the element with atomic number 61?",
        options: ["Pm", "Pr", "Pu", "Pa"],
        answer: "Pm"
    },
    {
        question: "Which element is known as the 'diamond of the sea'?",
        options: ["Carbon", "Iodine", "Boron", "Fluorine"],
        answer: "Carbon"
    },
    {
        question: "Which element is the heaviest naturally occurring element?",
        options: ["Uranium", "Thorium", "Plutonium", "Neptunium"],
        answer: "Uranium"
    },
    {
        question: "Which element is named after the country where it was first discovered, Germany?",
        options: ["Germanium", "Gallium", "Polonium", "Scandium"],
        answer: "Germanium"
    },
    {
        question: "What is the atomic number of the element with the symbol 'At'?",
        options: ["85", "83", "87", "89"],
        answer: "85"
    },
    {
        question: "What is the atomic number of the element with the symbol 'Tc'?",
        options: ["43", "45", "47", "49"],
        answer: "43"
    },
    {
        question: "Which element is known for its use in atomic bombs and as a reactor fuel?",
        options: ["Uranium", "Plutonium", "Radium", "Thorium"],
        answer: "Plutonium"
    },
    {
        question: "Which element has the highest electronegativity?",
        options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
        answer: "Fluorine"
    },
    {
        question: "Which element is represented by the symbol 'Np'?",
        options: ["Neptunium", "Nobelium", "Nickel", "Nitrogen"],
        answer: "Neptunium"
    },
    {
        question: "Which element was named after the first president of the United States?",
        options: ["Washington", "Jeffersonium", "Franklinium", "Roentgenium"],
        answer: "Franklinium"
    },
    {
        question: "What is the atomic number of the element with the symbol 'Bh'?",
        options: ["107", "105", "109", "111"],
        answer: "107"
    },
    {
        question: "Which element has the chemical symbol 'Pm'?",
        options: ["Promethium", "Praseodymium", "Plutonium", "Polonium"],
        answer: "Promethium"
    },
    {
        question: "Which element has the symbol 'W' and is used to make lightbulb filaments?",
        options: ["Tungsten", "Magnesium", "Molybdenum", "Manganese"],
        answer: "Tungsten"
    },
    {
        question: "Which element has the atomic number 101?",
        options: ["Mendelevium", "Einsteinium", "Fermium", "Berkelium"],
        answer: "Mendelevium"
    },
    {
        question: "What is the element with the atomic number 9?",
        options: ["Fluorine", "Oxygen", "Neon", "Nitrogen"],
        answer: "Fluorine"
    },
    {
        question: "Which element has the highest atomic number that occurs naturally?",
        options: ["Uranium", "Thorium", "Plutonium", "Neptunium"],
        answer: "Uranium"
    },
    {
        question: "Which element is the lightest noble gas?",
        options: ["Helium", "Neon", "Argon", "Krypton"],
        answer: "Helium"
    },
    {
        question: "Which element has the chemical symbol 'Cn'?",
        options: ["Copernicium", "Californium", "Curium", "Cerium"],
        answer: "Copernicium"
    },
    {
        question: "Which element is the most abundant in Earth's crust?",
        options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
        answer: "Oxygen"
    },
    {
        question: "Which element is known for its use in light bulbs and is the best conductor of electricity?",
        options: ["Tungsten", "Copper", "Gold", "Silver"],
        answer: "Copper"
    },
    {
        question: "Which element is named after a female scientist and is part of the lanthanide series?",
        options: ["Curium", "Mariecurium", "Einsteinium", "Polonium"],
        answer: "Curium"
    },
    {
        question: "Which element has the atomic number 92 and is commonly used in nuclear reactors?",
        options: ["Uranium", "Plutonium", "Radon", "Thorium"],
        answer: "Uranium"
    },
    {
        question: "Which element has the atomic number 93?",
        options: ["Neptunium", "Plutonium", "Uranium", "Thorium"],
        answer: "Neptunium"
    },
    {
        question: "Which element is named after a state in the USA?",
        options: ["California (Californium)", "Alaska (Alaskium)", "Texasium", "Georgia (Georgium)"],
        answer: "California (Californium)"
    },
    {
        question: "Which element is used in the production of photographic films?",
        options: ["Silver", "Copper", "Gold", "Iron"],
        answer: "Silver"
    },
    {
        question: "Which element has the atomic number 53 and is used in medical imaging?",
        options: ["Iodine", "Bromine", "Chlorine", "Fluorine"],
        answer: "Iodine"
    },
    {
        question: "Which element is used in the production of stainless steel?",
        options: ["Chromium", "Iron", "Copper", "Nickel"],
        answer: "Chromium"
    },
    {
        question: "Which element has the highest atomic number currently on the periodic table?",
        options: ["Oganesson", "Tennessine", "Moscovium", "Livermorium"],
        answer: "Oganesson"
    },
    {
        question: "Which element has the symbol 'Rn' and is a noble gas?",
        options: ["Radon", "Radium", "Rhenium", "Ruthenium"],
        answer: "Radon"
    },
    {
        question: "Which element is used as a moderator in nuclear reactors?",
        options: ["Boron", "Carbon", "Silicon", "Tungsten"],
        answer: "Boron"
    },
    {
        question: "Which element has the symbol 'Eu' and is used in phosphorescent applications?",
        options: ["Europium", "Erbium", "Europium", "Enbium"],
        answer: "Europium"
    },
    {
        question: "Which element is named after a country in Africa?",
        options: ["Zaire (Zaireium)", "Nigeria (Nigeriaium)", "Francium", "Gallium"],
        answer: "Gallium"
    },
    
    


    {
        question: "Which country is known as the Land of the Sun?",
        options: ["Japan", "India", "Mexico", "Egypt"],
        answer: "Mexico"
    },
    {
        question: "Which country is known as the Land of Volcanoes?",
        options: ["Iceland", "Indonesia", "Costa Rica", "Chile"],
        answer: "Costa Rica"
    },
    {
        question: "Which country is known as the Land of Jasmine?",
        options: ["Thailand", "Vietnam", "France", "Egypt"],
        answer: "Vietnam"
    },
    {
        question: "Which country is known as the Land of Sand Dunes?",
        options: ["Saudi Arabia", "Egypt", "Australia", "USA"],
        answer: "Saudi Arabia"
    },
    {
        question: "Which country is known as the Land of the Lotus?",
        options: ["Vietnam", "India", "China", "Cambodia"],
        answer: "Vietnam"
    },
    {
        question: "Which country is known as the Land of Pyramids?",
        options: ["Egypt", "Mexico", "Greece", "Turkey"],
        answer: "Egypt"
    },



    

    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },

    {
        question: "What is the capital of Japan?",
        options: ["Seoul","Tokyo", "Beijing",  "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What is the capital of Canada?",
        options: [ "Toronto", "Vancouver","Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Brisbane","Canberra"],
        answer: "Canberra"
    },
    {
        question: "What is the capital of Brazil?",
        options: [ "Rio de Janeiro", "Brasília","São Paulo", "Buenos Aires"],
        answer: "Brasília"
    },
    {
        question: "What is the capital of Germany?",
        options: [ "Munich","Berlin", "Hamburg", "Frankfurt"],
        answer: "Berlin"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Venice", "Florence"],
        answer: "Rome"
    },
    {
        question: "What is the capital of Spain?",
        options: [ "Barcelona", "Valencia", "Seville","Madrid"],
        answer: "Madrid"
    },
    {
        question: "What is the capital of Russia?",
        options: [ "Saint Petersburg", "Moscow","Novosibirsk", "Yekaterinburg"],
        answer: "Moscow"
    },
    {
        question: "What is the capital of China?",
        options: [ "Shanghai", "Beijing","Guangzhou", "Shenzhen"],
        answer: "Beijing"
    },
    {
        question: "What is the capital of India?",
        options: [ "Mumbai", "Bangalore", "Kolkata","New Delhi"],
        answer: "New Delhi"
    },
    {
        question: "What is the capital of South Korea?",
        options: [ "Busan","Seoul", "Incheon", "Daegu"],
        answer: "Seoul"
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
        answer: "Mexico City"
    },
    {
        question: "What is the capital of Argentina?",
        options: [ "Córdoba","Buenos Aires", "Rosario", "Mendoza"],
        answer: "Buenos Aires"
    },
    {
        question: "What is the capital of Egypt?",
        options: [ "Alexandria","Cairo", "Giza", "Luxor"],
        answer: "Cairo"
    },
    {
        question: "What is the capital of South Africa?",
        options: [ "Cape Town","Pretoria", "Johannesburg", "Durban"],
        answer: "Pretoria"
    },
    {
        question: "What is the capital of Turkey?",
        options: [ "Istanbul", "Izmir", "Bursa","Ankara"],
        answer: "Ankara"
    },
    {
        question: "What is the capital of Thailand?",
        options: [ "Chiang Mai","Bangkok", "Phuket", "Pattaya"],
        answer: "Bangkok"
    },
    {
        question: "What is the capital of Vietnam?",
        options: [ "Ho Chi Minh City", "Da Nang","Hanoi", "Hai Phong"],
        answer: "Hanoi"
    },
    {
        question: "What is the capital of Indonesia?",
        options: [ "Surabaya", "Bandung", "Medan","Jakarta"],
        answer: "Jakarta"
    },
    {
        question: "What is the capital of Malaysia?",
        options: ["Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh"],
        answer: "Kuala Lumpur"
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: [ "Manchester", "Birmingham","London", "Liverpool"],
        answer: "London"
    },
    {
        question: "What is the capital of the United States?",
        options: ["New York","Washington, D.C.",  "Los Angeles", "Chicago"],
        answer: "Washington, D.C."
    },
    {
        question: "What is the capital of France?",
        options: ["Lyon","Paris",  "Marseille", "Toulouse"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Greece?",
        options: [ "Thessaloniki", "Patras","Athens", "Heraklion"],
        answer: "Athens"
    },
    {
        question: "What is the capital of Portugal?",
        options: ["Porto", "Braga", "Coimbra","Lisbon"],
        answer: "Lisbon"
    },
    {
        question: "What is the capital of Sweden?",
        options: [ "Gothenburg","Stockholm", "Malmö", "Uppsala"],
        answer: "Stockholm"
    },
    {
        question: "What is the capital of Norway?",
        options: [ "Bergen", "Trondheim", "Stavanger","Oslo"],
        answer: "Oslo"
    },
    {
        question: "What is the capital of Finland?",
        options: ["Espoo","Helsinki",  "Tampere", "Vantaa"],
        answer: "Helsinki"
    },
    {
        question: "What is the capital of Denmark?",
        options: [ "Aarhus","Copenhagen", "Odense", "Aalborg"],
        answer: "Copenhagen"
    },
    {
        question: "What is the capital of Switzerland?",
        options: ["Zurich","Bern",  "Geneva", "Basel"],
        answer: "Bern"
    },
    {
        question: "What is the capital of Austria?",
        options: [ "Linz","Vienna", "Salzburg","Graz",],
        answer: "Vienna"
    },
    {
        question: "What is the capital of Belgium?",
        options: [ "Antwerp", "Ghent","Brussels", "Bruges"],
        answer: "Brussels"
    },
    {
        question: "What is the capital of the Netherlands?",
        options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
        answer: "Amsterdam"
    },
    {
        question: "What is the capital of Poland?",
        options: [ "Kraków","Warsaw", "Łódź", "Wrocław"],
        answer: "Warsaw"
    },
    {
        question: "What is the capital of Czech Republic?",
        options: [ "Brno", "Ostrava", "Plzeň","Prague"],
        answer: "Prague"
    },
    {
        question: "What is the capital of Hungary?",
        options: ["Budapest", "Debrecen", "Szeged", "Miskolc"],
        answer: "Budapest"
    },
    {
        question: "What is the capital of Romania?",
        options: [ "Cluj-Napoca", "Timișoara","Bucharest", "Iași"],
        answer: "Bucharest"
    },
    {
        question: "What is the capital of Ukraine?",
        options: [ "Kharkiv","Kyiv", "Odessa", "Dnipro"],
        answer: "Kyiv"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        options: [ "Jeddah", "Riyadh","Mecca", "Medina"],
        answer: "Riyadh"
    },
    {
        question: "What is the capital of Iran?",
        options: ["Tehran", "Mashhad", "Isfahan", "Karaj"],
        answer: "Tehran"
    },
    {
        question: "What is the capital of Iraq?",
        options: [ "Basra", "Baghdad","Mosul", "Erbil"],
        answer: "Baghdad"
    },
    {
        question: "What is the capital of Israel?",
        options: ["Jerusalem", "Tel Aviv", "Haifa", "Beersheba"],
        answer: "Jerusalem"
    },
    {
        question: "What is the capital of Pakistan?",
        options: [ "Karachi", "Lahore", "Faisalabad","Islamabad"],
        answer: "Islamabad"
    },
    {
        question: "What is the capital of Bangladesh?",
        options: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
        answer: "Dhaka"
    },
    {
        question: "What is the capital of Nepal?",
        options: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur"],
        answer: "Kathmandu"
    },
    {
        question: "What is the capital of Sri Lanka?",
        options: [ "Kandy","Colombo", "Galle", "Jaffna"],
        answer: "Colombo"
    },
    {
        question: "What is the capital of Philippines?",
        options: ["Manila", "Quezon City", "Cebu City", "Davao City"],
        answer: "Manila"
    },
    {
        question: "What is the capital of Singapore?",
        options: [ "Jurong", "Woodlands", "Tampines","Singapore",],
        answer: "Singapore"
    },
    {
        question: "What is the capital of New Zealand?",
        options: [ "Auckland", "Christchurch", "Hamilton","Wellington"],
        answer: "Wellington"
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Dublin", "Cork", "Galway", "Limerick"],
        answer: "Dublin"
    },
    {
        question: "What is the capital of Scotland?",
        options: [ "Glasgow", "Aberdeen", "Dundee","Edinburgh"],
        answer: "Edinburgh"
    },
    {
        question: "What is the capital of Wales?",
        options: ["Cardiff", "Swansea", "Newport", "Bangor"],
        answer: "Cardiff"
    },
    {
        question: "What is the capital of Northern Ireland?",
        options: [ "Derry", "Lisburn","Belfast", "Newry"],
        answer: "Belfast"
    },
    {
        question: "What is the capital of Iceland?",
        options: ["Reykjavik", "Kópavogur", "Hafnarfjörður", "Akureyri"],
        answer: "Reykjavik"
    },
    {
        question: "What is the capital of Greenland?",
        options: [ "Sisimiut", "Ilulissat", "Qaqortoq","Nuuk",],
        answer: "Nuuk"
    },
    {
        question: "What is the capital of Cuba?",
        options: ["Havana", "Santiago de Cuba", "Camagüey", "Holguín"],
        answer: "Havana"
    },
    {
        question: "What is the capital of Jamaica?",
        options: ["Kingston", "Montego Bay", "Spanish Town", "Portmore"],
        answer: "Kingston"
    },
    {
        question: "What is the capital of Haiti?",
        options: ["Cap-Haïtien", "Gonaïves","Port-au-Prince",  "Saint-Marc"],
        answer: "Port-au-Prince"
    },
    {
        question: "What is the capital of Dominican Republic?",
        options: ["Santiago", "La Romana","Santo Domingo",  "San Pedro de Macorís"],
        answer: "Santo Domingo"
    },
    {
        question: "What is the capital of Puerto Rico?",
        options: ["San Juan", "Bayamón", "Carolina", "Ponce"],
        answer: "San Juan"
    },
    {
        question: "What is the capital of Costa Rica?",
        options: ["San José", "Limón", "Alajuela", "Heredia"],
        answer: "San José"
    },
    {
        question: "What is the capital of Panama?",
        options: [ "San Miguelito", "Tocumen","Panama City", "David"],
        answer: "Panama City"
    },
    {
        question: "What is the capital of Colombia?",
        options: ["Medellín", "Cali", "Barranquilla","Bogotá"],
        answer: "Bogotá"
    },
    {
        question: "What is the capital of Venezuela?",
        options: [ "Maracaibo", "Valencia","Caracas", "Barquisimeto"],
        answer: "Caracas"
    },
    {
        question: "What is the capital of Ecuador?",
        options: [ "Guayaquil","Quito", "Cuenca", "Santo Domingo"],
        answer: "Quito"
    },
    {
        question: "What is the capital of Peru?",
        options: [ "Arequipa","Lima", "Trujillo", "Chiclayo"],
        answer: "Lima"
    },
    {
        question: "What is the capital of Bolivia?",
        options: ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"],
        answer: "La Paz"
    },
    {
        question: "What is the capital of Chile?",
        options: [ "Valparaíso", "Concepción","Santiago", "La Serena"],
        answer: "Santiago"
    },
    {
        question: "What is the capital of Paraguay?",
        options: [ "Ciudad del Este", "San Lorenzo", "Luque","None"],
        answer: "None"
    },
    {
        question: "What is the capital of Uruguay?",
        options: [ "Salto", "Paysandú", "Las Piedras","Montevideo",],
        answer: "Montevideo"
    },
    {
        question: "What is the capital of Zimbabwe?",
        options: ["Harare", "Bulawayo", "Chitungwiza", "Mutare"],
        answer: "Harare"
    },
    {
        question: "What is the capital of Kenya?",
        options: [ "Mombasa", "Kisumu","Nairobi", "Nakuru"],
        answer: "Nairobi"
    },
    {
        question: "What is the capital of Ethiopia?",
        options: ["Addis Ababa", "Dire Dawa", "Mekele", "Gondar"],
        answer: "Addis Ababa"
    },
    {
        question: "What is the capital of Nigeria?",
        options: [ "Lagos","Abuja", "Kano", "Ibadan"],
        answer: "Abuja"
    },
    {
        question: "What is the capital of Ghana?",
        options: ["Accra", "Kumasi", "Tamale", "Sekondi-Takoradi"],
        answer: "Accra"
    },
    {
        question: "What is the capital of Morocco?",
        options: [ "Casablanca","Rabat", "Fes", "Tangier"],
        answer: "Rabat"
    },
    {
        question: "What is the capital of Algeria?",
        options: [ "Oran", "Constantine","Algiers", "Annaba"],
        answer: "Algiers"
    },
    {
        question: "What is the capital of Tunisia?",
        options: [ "Sfax", "Sousse", "Kairouan","Tunis",],
        answer: "Tunis"
    },
    {
        question: "What is the capital of Libya?",
        options: [ "Benghazi", "Misrata","Tripoli", "Tarhuna"],
        answer: "Tripoli"
    },
    {
        question: "What is the capital of Sudan?",
        options: ["Khartoum", "Omdurman", "Port Sudan", "Kassala"],
        answer: "Khartoum"
    },
    {
        question: "What is the capital of South Sudan?",
        options: ["Malakal","Juba",  "Wau", "Yei"],
        answer: "Juba"
    },
    {
        question: "What is the capital of Angola?",
        options: ["Huambo", "Lobito","Luanda",  "Benguela"],
        answer: "Luanda"
    },
    {
        question: "What is the capital of Mozambique?",
        options: ["Maputo", "Matola", "Beira", "Nampula"],
        answer: "Maputo"
    },
    {
        question: "What is the capital of Zambia?",
        options: [ "Kitwe", "Ndola", "Kabwe","Lusaka"],
        answer: "Lusaka"
    },
    {
        question: "What is the capital of Malawi?",
        options: [ "Blantyre", "Mzuzu", "Zomba","Lilongwe"],
        answer: "Lilongwe"
    },
    {
        question: "What is the capital of Tanzania?",
        options: ["Dodoma", "Dar es Salaam", "Mwanza", "Arusha"],
        answer: "Dodoma"
    },
    {
        question: "What is the capital of Uganda?",
        options: ["Gulu","Kampala",  "Lira", "Mbarara"],
        answer: "Kampala"
    },
    {
        question: "What is the capital of Rwanda?",
        options: [ "Butare","Kigali", "Gitarama", "Ruhengeri"],
        answer: "Kigali"
    },
    {
        question: "What is the capital of Burundi?",
        options: [ "Gitega", "Ngozi","Bujumbura", "Rumonge"],
        answer: "Bujumbura"
    },
    {
        question: "What is the capital of Somalia?",
        options: [ "Hargeisa","Mogadishu", "Kismayo", "Berbera"],
        answer: "Mogadishu"
    },
    {
        question: "What is the capital of Djibouti?",
        options: ["Djibouti City", "Ali Sabieh", "Tadjoura", "Obock"],
        answer: "Djibouti City"
    },
    {
        question: "What is the capital of Eritrea?",
        options: [ "Keren","Asmara", "Massawa", "Assab"],
        answer: "Asmara"
    },
    {
        question: "What is the capital of Madagascar?",
        options: ["Toamasina", "Antsirabe","Antananarivo",  "Fianarantsoa"],
        answer: "Antananarivo"
    },
    {
        question: "What is the capital of Mauritius?",
        options: [ "Beau Bassin-Rose Hill","Port Louis", "Vacoas-Phoenix", "Curepipe"],
        answer: "Port Louis"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        answer: "Hydrogen"
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        answer: "Yen"
    },
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["China", "Japan", "Brazil", "USA"],
        answer: "Japan"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale"
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        answer: "Antarctic Desert"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: "300,000 km/s"
},
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "France", "Brazil", "Argentina"],
        answer: "France"
    },
    {
        question: "How many players are on a basketball team?",
        options: ["5", "7", "6", "8"],
        answer: "5"
    },
    {
        question: "Which player holds the record for the most goals scored in the Premier League?",
        options: ["Wayne Rooney", "Harry Kane", "Alan Shearer", "Sergio Agüero"],
        answer: "Alan Shearer"
    },
    {
        question: "In which year did the first modern Olympic Games take place?",
        options: ["1900", "1896", "1920", "1948"],
        answer: "1896"
    },
    {
        question: "Who won the 2020 NBA MVP award?",
        options: ["Giannis Antetokounmpo", "LeBron James", "James Harden", "Luka Dončić"],
        answer: "Giannis Antetokounmpo"
    },
    {
        question: "Which country won the 2019 Cricket World Cup?",
        options: ["New Zealand", "India", "Australia", "England"],
        answer: "England"
    },
    {
        question: "Which tennis player is known as the 'King of Clay'?",
        options: ["Roger Federer", "Andy Murray", "Rafael Nadal", "Novak Djokovic"],
        answer: "Rafael Nadal"
    },
    {
        question: "What is the length of an Olympic swimming pool?",
        options: ["50 meters", "100 meters", "25 meters", "75 meters"],
        answer: "50 meters"
    },
    {
        question: "In which sport would you perform a slam dunk?",
        options: ["Soccer", "Tennis", "Basketball", "Rugby"],
        answer: "Basketball"
    },
    {
        question: "Who won the 2016 UEFA Champions League final?",
        options: ["Barcelona", "Real Madrid", "Bayern Munich", "Juventus"],
        answer: "Real Madrid"
    },
    {
        question: "What is the maximum break in snooker?",
        options: ["100", "150", "200", "147"],
        answer: "147"
    },
    {
        question: "Which sport is known as the 'King of Sports'?",
        options: ["Cricket", "Football", "Tennis", "Baseball"],
        answer: "Football"
    },
    {
        question: "How many players are on a rugby union team?",
        options: ["15", "13", "11", "7"],
        answer: "15"
    },
    {
        question: "Who holds the record for the most Olympic gold medals?",
        options: ["Simone Biles", "Michael Phelps", "Usain Bolt", "Carl Lewis"],
        answer: "Michael Phelps"
    },
    {
        question: "Which country is famous for inventing baseball?",
        options: ["Australia", "Cuba", "Japan", "USA"],
        answer: "USA"
    },
    {
        question: "How many minutes is a standard soccer match (excluding stoppage time)?",
        options: ["90", "80", "100", "120"],
        answer: "90"
    },
    {
        question: "In tennis, what is the term for a score of 40-40?",
        options: ["Set", "Deuce", "Advantage", "Break"],
        answer: "Deuce"
    },
    {
        question: "Who won the 2018 Wimbledon Men’s singles title?",
        options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Andy Murray"],
        answer: "Novak Djokovic"
    },
    {
        question: "In which year was the first Super Bowl held?",
        options: ["1970", "1966", "1980", "1950"],
        answer: "1966"
    },
    {
        question: "What is the duration of an ice hockey game?",
        options: ["70 minutes", "60 minutes", "50 minutes", "45 minutes"],
        answer: "60 minutes"
    },
    {
        question: "Which team has won the most NBA championships?",
        options: ["Golden State Warriors", "Los Angeles Lakers", "Chicago Bulls", "Boston Celtics"],
        answer: "Boston Celtics"
    },
    {
        question: "Who is known as the fastest man in the world?",
        options: ["Yohan Blake", "Usain Bolt", "Carl Lewis", "Michael Johnson"],
        answer: "Usain Bolt"
    },
    {
        question: "In which sport would you use a shuttlecock?",
        options: ["Tennis", "Badminton", "Volleyball", "Squash"],
        answer: "Badminton"
    },
    {
        question: "What is the maximum number of players on a soccer team fielded during a match?",
        options: ["11", "10", "12", "9"],
        answer: "11"
    },
    {
        question: "Which country won the first Rugby World Cup in 1987?",
        options: ["Australia", "South Africa", "New Zealand", "England"],
        answer: "New Zealand"
    },
    {
        question: "Who won the 2008 Beijing Olympic Games Men’s Basketball gold medal?",
        options: ["Argentina", "USA", "Spain", "Greece"],
        answer: "USA"
    },
    {
        question: "Which football club is known as 'The Red Devils'?",
        options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
        answer: "Manchester United"
    },
    {
        question: "In which sport do competitors use a foil, epee, or sabre?",
        options: ["Boxing", "Fencing", "Archery", "Judo"],
        answer: "Fencing"
    },
    {
        question: "How many teams compete in the NFL playoffs?",
        options: ["14", "16", "12", "10"],
        answer: "14"
    },
    {
        question: "Who won the first Women's FIFA World Cup in 1991?",
        options: ["USA", "Germany", "Brazil", "China"],
        answer: "USA"
    },
    {
        question: "In which year did Michael Jordan retire for the first time from the NBA?",
        options: ["2002", "1996", "1998", "2000"],
        answer: "1998"
    },
    {
        question: "Who won the 2015 Rugby World Cup?",
        options: ["South Africa", "New Zealand", "England", "Australia"],
        answer: "New Zealand"
    },
    {
        question: "Which country is famous for having a sport called curling?",
        options: ["Canada", "USA", "Norway", "Sweden"],
        answer: "Canada"
    },
    {
        question: "Which athlete is known for the 'Ali Shuffle'?",
        options: ["Muhammad Ali", "Floyd Mayweather", "Mike Tyson", "George Foreman"],
        answer: "Muhammad Ali"
    },
    {
        question: "What is the total number of players on a baseball field at one time?",
        options: ["11", "9", "10", "12"],
        answer: "9"
    },
    {
        question: "Which sport is the 'Tour de France' associated with?",
        options: ["Cycling", "Running", "Tennis", "Swimming"],
        answer: "Cycling"
    },
    {
        question: "In cricket, what term is used when a bowler dismisses a batsman without scoring a run?",
        options: ["Duck", "Over", "Boundary", "Hat-trick"],
        answer: "Duck"
    },
    {
        question: "What is the diameter of a basketball hoop?",
        options: ["24 inches", "22 inches", "18 inches", "20 inches"],
        answer: "18 inches"
    },
    {
        question: "What is the maximum number of points a player can score in one frame of snooker?",
        options: ["147", "150", "160", "140"],
        answer: "147"
    },
    {
        question: "Which team won the 2014 FIFA World Cup?",
        options: ["Argentina", "Germany", "Brazil", "France"],
        answer: "Germany"
    },
    {
        question: "Who won the 2012 London Olympics Men's 100 meters gold medal?",
        options: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Justin Gatlin"],
        answer: "Usain Bolt"
    },
    {
        question: "In which year did the first modern Olympic Games take place?",
        options: ["1920", "1896", "1900", "1948"],
        answer: "1896"
    },
        {
            question: "Who won the 2021 US Open Men's Singles title?",
            options: ["Rafael Nadal", "Novak Djokovic", "Daniil Medvedev", "Stefanos Tsitsipas"],
            answer: "Daniil Medvedev"
        },
        {
            question: "What is the term used when a player hits a home run with the bases loaded in baseball?",
            options: ["Grand Slam", "Triple", "Single", "Double"],
            answer: "Grand Slam"
        },
        {
            question: "Which country won the 2021 Copa América?",
            options: ["Brazil", "Argentina", "Chile", "Colombia"],
            answer: "Argentina"
        },
        {
            question: "What is the maximum number of points a player can score in one frame of a 9-ball pool game?",
            options: ["9", "10", "12", "15"],
            answer: "9"
        },
        {
            question: "Which country is known for hosting the Formula 1 Grand Prix at Silverstone?",
            options: ["France", "Germany", "United Kingdom", "Italy"],
            answer: "United Kingdom"
        },
        {
            question: "Which famous soccer player is known as 'CR7'?",
            options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappé"],
            answer: "Cristiano Ronaldo"
        },
        {
            question: "In which sport do athletes compete in the decathlon?",
            options: ["Swimming", "Athletics", "Cycling", "Gymnastics"],
            answer: "Athletics"
        },
        {
            question: "Which player is known for the 'Hand of God' goal in the 1986 FIFA World Cup?",
            options: ["Diego Maradona", "Pelé", "Lionel Messi", "Ronaldo Nazário"],
            answer: "Diego Maradona"
        },
        {
            question: "Who holds the record for most goals scored in a calendar year?",
            options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Zlatan Ibrahimović"],
            answer: "Lionel Messi"
        },
        {
            question: "Which country has won the most Rugby World Cup titles?",
            options: ["South Africa", "New Zealand", "England", "Australia"],
            answer: "New Zealand"
        },
        {
            question: "Who was the first woman to win an Olympic gold medal in boxing?",
            options: ["Nicola Adams", "Katie Taylor", "Claressa Shields", "Laila Ali"],
            answer: "Nicola Adams"
        },
        {
            question: "Which basketball team does Stephen Curry play for?",
            options: ["Chicago Bulls", "Miami Heat", "Golden State Warriors", "Los Angeles Lakers"],
            answer: "Golden State Warriors"
        },
        {
            question: "Which country won the 2018 Winter Olympics hockey tournament?",
            options: ["Canada", "USA", "Sweden", "Russia"],
            answer: "USA"
        },
        {
            question: "In which sport would you find a 'puck'?",
            options: ["Ice Hockey", "Lacrosse", "Field Hockey", "Soccer"],
            answer: "Ice Hockey"
        },
        {
            question: "Which tennis tournament is played on grass courts?",
            options: ["Australian Open", "US Open", "French Open", "Wimbledon"],
            answer: "Wimbledon"
        },
        {
            question: "Which football club is known as 'The Gunners'?",
            options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"],
            answer: "Arsenal"
        },
        {
            question: "Which boxer is known as 'The Greatest'?",
            options: ["Mike Tyson", "Floyd Mayweather", "Muhammad Ali", "George Foreman"],
            answer: "Muhammad Ali"
        },
        {
            question: "In which country is the 2022 FIFA World Cup held?",
            options: ["Qatar", "Russia", "Brazil", "USA"],
            answer: "Qatar"
        },
        {
            question: "Which cricket player is known as the 'Master Blaster'?",
            options: ["Ricky Ponting", "Brian Lara", "Virat Kohli", "Sachin Tendulkar"],
            answer: "Sachin Tendulkar"
        },
        {
            question: "Which country has the most Olympic gold medals in swimming?",
            options: ["Australia", "USA", "Germany", "China"],
            answer: "USA"
        },
        {
            question: "Who was the first NBA player to score 100 points in a single game?",
            options: ["Wilt Chamberlain", "Kareem Abdul-Jabbar", "Michael Jordan", "LeBron James"],
            answer: "Wilt Chamberlain"
        },
        {
            question: "Which NFL team has won the most Super Bowl titles?",
            options: ["New England Patriots", "Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"],
            answer: "New England Patriots"
        },
        {
            question: "Which sport involves a 'yellow card' and 'red card'?",
            options: ["Basketball", "Soccer", "Rugby", "Tennis"],
            answer: "Soccer"
        },
        {
            question: "Which athlete is known for the phrase 'Float like a butterfly, sting like a bee'?",
            options: ["Floyd Mayweather", "Mike Tyson", "Muhammad Ali", "Sugar Ray Leonard"],
            answer: "Muhammad Ali"
        },
        {
            question: "In which sport do athletes participate in a 'Triple Jump'?",
            options: ["Long Jump", "High Jump", "Athletics", "Cycling"],
            answer: "Athletics"
        },
        {
            question: "Which player holds the record for most assists in NBA history?",
            options: ["Magic Johnson", "John Stockton", "LeBron James", "Jason Kidd"],
            answer: "John Stockton"
        },
        {
            question: "Who won the first UEFA Women's Champions League in 2001?",
            options: ["Lyon", "Frankfurt", "Bayern Munich", "Arsenal"],
            answer: "Frankfurt"
        },
        {
            question: "Which player is nicknamed 'The Beast' in the world of rugby?",
            options: ["Sonny Bill Williams", "Jonah Lomu", "Brian O'Driscoll", "Dan Carter"],
            answer: "Jonah Lomu"
        },
        {
            question: "Which team won the 2019 ICC Cricket World Cup?",
            options: ["India", "New Zealand", "Australia", "England"],
            answer: "England"
        },
        {
            question: "Who is known as the 'Fastest Man Alive' in track and field?",
            options: ["Usain Bolt", "Carl Lewis", "Michael Johnson", "Tyson Gay"],
            answer: "Usain Bolt"
        },
        {
            question: "Which sport uses a bat, ball, and wicket?",
            options: ["Baseball", "Cricket", "Tennis", "Golf"],
            answer: "Cricket"
        },
        {
            question: "Which football club is known as 'The Blues'?",
            options: ["Manchester United", "Chelsea", "Liverpool", "Everton"],
            answer: "Chelsea"
        },
        {
            question: "Who won the 2008 Olympic Games Men's 100 meters gold medal?",
            options: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Justin Gatlin"],
            answer: "Usain Bolt"
        },
    
            {
                question: "What is the capital city of Nepal?",
                options: ["Pokhara", "Lalitpur", "Kathmandu", "Biratnagar"],
                answer: "Kathmandu"
            },
            {
                question: "Which mountain is the highest peak in Nepal?",
                options: ["Mount Everest", "Kanchenjunga", "Lhotse", "Makalu"],
                answer: "Mount Everest"
            },
            {
                question: "Who was the first King of Nepal?",
                options: ["Prithvi Narayan Shah", "Tribhuvan", "Birendra", "Maharaj Jaya Prakash Malla"],
                answer: "Prithvi Narayan Shah"
            },
            {
                question: "In which year did Nepal become a federal democratic republic?",
                options: ["2007", "2008", "2010", "2006"],
                answer: "2008"
            },
            {
                question: "What is the national flower of Nepal?",
                options: ["Rose", "Lotus", "Rhododendron", "Tulip"],
                answer: "Rhododendron"
            },
            {
                question: "Which river is considered the longest river in Nepal?",
                options: ["Koshi River", "Ganga River", "Bagmati River", "Tungabhadra River"],
                answer: "Koshi River"
            },
            {
                question: "What is the currency of Nepal?",
                options: ["Nepalese Rupee", "Indian Rupee", "Dollar", "Pound"],
                answer: "Nepalese Rupee"
            },
            {
                question: "What is the national animal of Nepal?",
                options: ["Elephant", "Tiger", "Cow", "Cow and Yak"],
                answer: "Cow"
            },
            {
                question: "Which famous temple is located in the Kathmandu Valley?",
                options: ["Boudhanath Stupa", "Swayambhunath Stupa", "Pashupatinath Temple", "Lumbini Temple"],
                answer: "Pashupatinath Temple"
            },
            {
                question: "What is the national bird of Nepal?",
                options: ["Peacock", "Eagle", "Dove", "Danphe"],
                answer: "Danphe"
            },
            {
                question: "Which is the largest city in Nepal by population?",
                options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
                answer: "Kathmandu"
            },
            {
                question: "Who was the first woman president of Nepal?",
                options: ["Sushila Koirala", "Bidya Devi Bhandari", "Madhavi Rajkarnikar", "Asha Koirala"],
                answer: "Bidya Devi Bhandari"
            },
            {
                question: "Which is the longest bridge in Nepal?",
                options: ["Panchanadi Bridge", "Bhairabsthan Bridge", "Narayani Bridge", "Koshi Barrage"],
                answer: "Koshi Barrage"
            },
            {
                question: "What is the official language of Nepal?",
                options: ["Hindi", "Nepali", "English", "Maithili"],
                answer: "Nepali"
            },
            {
                question: "Which year did Nepal join the United Nations?",
                options: ["1960", "1955", "1990", "1995"],
                answer: "1990"
            },
            {
                question: "Which of these is a famous lake in Nepal?",
                options: ["Lake Titicaca", "Phewa Lake", "Lake Baikal", "Caspian Sea"],
                answer: "Phewa Lake"
            },
            {
                question: "Which is the largest national park in Nepal?",
                options: ["Bardia National Park", "Chitwan National Park", "Sagarmatha National Park", "Rara National Park"],
                answer: "Bardia National Park"
            },
            {
                question: "What is the traditional dress for men in Nepal?",
                options: ["Lungi", "Sherwani", "Dhoti", "Daura Suruwal"],
                answer: "Daura Suruwal"
            },
            {
                question: "Which of these is a famous festival celebrated in Nepal?",
                options: ["Diwali", "Dashain", "Holi", "Lunar New Year"],
                answer: "Dashain"
            },
            {
                question: "Which famous natural heritage site is located in Nepal?",
                options: ["Great Barrier Reef", "Mount Everest", "Sundarbans", "Yellowstone National Park"],
                answer: "Mount Everest"
            },
            {
                question: "Which ancient city in Nepal is known for its temples and Durbar Square?",
                options: ["Pokhara", "Kathmandu", "Lalitpur", "Bhaktapur"],
                answer: "Bhaktapur"
            },
            {
                question: "Which organization was founded in Nepal in 1950 to promote environmental protection?",
                options: ["World Wildlife Fund", "National Trust for Nature Conservation", "Nepal Wildlife Society", "Friends of Nature Nepal"],
                answer: "National Trust for Nature Conservation"
            },
            {
                question: "What is the population of Nepal (approximately, as of 2024)?",
                options: ["15 million", "30 million", "50 million", "90 million"],
                answer: "30 million"
            },
            {
                question: "Which is the tallest mountain in the world, located in Nepal?",
                options: ["K2", "Kanchenjunga", "Lhotse", "Mount Everest"],
                answer: "Mount Everest"
            },
            {
                question: "Who is the founder of the Shah Dynasty of Nepal?",
                options: ["Prithvi Narayan Shah", "Birendra", "Tribhuvan", "Jaya Prakash Malla"],
                answer: "Prithvi Narayan Shah"
            },
            {
                question: "Which is the second-largest city in Nepal?",
                options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
                answer: "Pokhara"
            },
            {
                question: "What is the main export product of Nepal?",
                options: ["Tea", "Rice", "Wool", "Himalayan salt"],
                answer: "Tea"
            },
            {
                question: "Where is Lumbini, the birthplace of Lord Buddha, located?",
                options: ["Bhaktapur", "Kathmandu", "Lalitpur", "Rupandehi"],
                answer: "Rupandehi"
            },
            {
                question: "Which is the national sport of Nepal?",
                options: ["Football", "Cricket", "Volleyball", "Kabaddi"],
                answer: "Volleyball"
            },
            {
                question: "Which river in Nepal is known as the 'Sorrow of Bihar'?",
                options: ["Koshi River", "Bagmati River", "Ganges River", "Trishuli River"],
                answer: "Koshi River"
            },
            {
                question: "What is the most popular traditional dance form in Nepal?",
                options: ["Bhojpuri", "Kohal", "Chhewar", "Dandiya"],
                answer: "Kohal"
            },
            {
                question: "Which is the smallest district in Nepal by area?",
                options: ["Kathmandu", "Bhaktapur", "Lalitpur", "Sankhuwasabha"],
                answer: "Bhaktapur"
            },
            {
                question: "Which is the highest-altitude airport in Nepal?",
                options: ["Kathmandu Airport", "Pokhara Airport", "Lukla Airport", "Simikot Airport"],
                answer: "Lukla Airport"
            },
            {
                question: "Who is the first female mountaineer of Nepal to climb Mount Everest?",
                options: ["Pasang Lhamu Sherpa", "Saila Sherpa", "Maya Sherpa", "Dawa Yangzum Sherpa"],
                answer: "Pasang Lhamu Sherpa"
            },
            {
                question: "Which political party was the first to lead the government in Nepal after the monarchy was abolished?",
                options: ["Nepali Congress", "Communist Party of Nepal", "Maoist Party", "Rastriya Prajatantra Party"],
                answer: "Maoist Party"
            },
            {
                question: "Which traditional structure is a hallmark of Nepali architecture?",
                options: ["Pagoda", "Pyramid", "Dome", "Chhatri"],
                answer: "Pagoda"
            },
            {
                question: "Which is the national tree of Nepal?",
                options: ["Bamboo", "Sal", "Pine", "Peepal"],
                answer: "Sal"
            },
            {
                question: "In which year did Nepal open its first international airport?",
                options: ["1950", "1960", "1970", "1990"],
                answer: "1960"
            },
            {
                question: "Which animal is commonly found in the forests of Nepal?",
                options: ["Elephant", "Tiger", "Penguin", "Koala"],
                answer: "Tiger"
            },
            {
                question: "Which river is most commonly associated with the Kathmandu Valley?",
                options: ["Koshi River", "Bagmati River", "Trishuli River", "Ganges River"],
                answer: "Bagmati River"
            },
            {
                question: "What is the famous festival celebrated by the Newar community of Nepal?",
                options: ["Lhosar", "Buddha Jayanti", "Dashain", "Tihar"],
                answer: "Tihar"
            },
            {
                question: "What is the official name of Nepal?",
                options: ["Nepal Kingdom", "Federal Democratic Republic of Nepal", "People's Republic of Nepal", "Nepal Republic"],
                answer: "Federal Democratic Republic of Nepal"
            },
            {
                question: "Which famous bridge connects Nepal to India?",
                options: ["Raxaul-Birganj Bridge", "Mahendra Bridge", "Koshi Barrage", "Sunauli Border Bridge"],
                answer: "Raxaul-Birganj Bridge"
            },
                {
                    question: "Who was the first King of unified Nepal?",
                    options: ["Prithvi Narayan Shah", "Jaya Prakash Malla", "Birendra", "Tribhuvan"],
                    answer: "Prithvi Narayan Shah"
                },
                {
                    question: "Which is the largest river basin in Nepal?",
                    options: ["Koshi River Basin", "Ganges River Basin", "Trishuli River Basin", "Karnali River Basin"],
                    answer: "Koshi River Basin"
                },
                {
                    question: "Which district is known as the 'Gateway to Mount Everest'?",
                    options: ["Solukhumbu", "Ramechhap", "Sankhuwasabha", "Okhaldhunga"],
                    answer: "Solukhumbu"
                },
                {
                    question: "Which ethnic group is known as the 'Gorkhas' in Nepal?",
                    options: ["Madeshi", "Tamang", "Magar", "Gorkha"],
                    answer: "Gorkha"
                },
                {
                    question: "What is the official name of the Parliament of Nepal?",
                    options: ["Nepal Assembly", "Rastriya Sabha", "Pratinidhi Sabha", "Parliament of Nepal"],
                    answer: "Pratinidhi Sabha"
                },
                {
                    question: "Which was the first Nepali film to be nominated for an international award?",
                    options: ["Hami Yestai Ta Ho Mayalu", "Kalo Pothi", "Pashupati Prasad", "The Black Hen"],
                    answer: "The Black Hen"
                },
                {
                    question: "Who is known as the 'Mother of Nepal' for her contribution to the country's welfare?",
                    options: ["Sahana Pradhan", "Annapurna Devi", "Asha Koirala", "Indira Gandhi"],
                    answer: "Sahana Pradhan"
                },
                {
                    question: "Which is the highest waterfall in Nepal?",
                    options: ["Hyatung Waterfall", "Hyatung Falls", "Annapurna Falls", "Syangja Waterfall"],
                    answer: "Hyatung Waterfall"
                },
                {
                    question: "Which is the most populous district in Nepal?",
                    options: ["Kathmandu", "Biratnagar", "Pokhara", "Lalitpur"],
                    answer: "Kathmandu"
                },
                {
                    question: "Which famous Nepali artist is known for his works in modern painting?",
                    options: ["Bhanu Aacharya", "Manoj Kumar", "Ravi Kiran", "Pradeep Kumar Koirala"],
                    answer: "Bhanu Aacharya"
                },
                {
                    question: "Which is the longest highway in Nepal?",
                    options: ["East-West Highway", "Prithvi Highway", "Madhyapur Highway", "Araniko Highway"],
                    answer: "East-West Highway"
                },
                {
                    question: "What is the national sport of Nepal?",
                    options: ["Football", "Kabaddi", "Cricket", "Hockey"],
                    answer: "Kabaddi"
                },
                {
                    question: "What is the name of the famous temple located in the Lumbini region of Nepal?",
                    options: ["Swayambhunath", "Boudhanath Stupa", "Pashupatinath", "Lumbini Temple"],
                    answer: "Lumbini Temple"
                },
                {
                    question: "What is the oldest university in Nepal?",
                    options: ["Tribhuvan University", "Kathmandu University", "Pokhara University", "Patan University"],
                    answer: "Tribhuvan University"
                },
                {
                    question: "Which Nepali king is credited for the unification of Nepal?",
                    options: ["King Tribhuvan", "King Prithvi Narayan Shah", "King Birendra", "King Mahendra"],
                    answer: "King Prithvi Narayan Shah"
                },
                {
                    question: "Which is the largest ethnic group in Nepal?",
                    options: ["Tamang", "Magar", "Madeshi", "Chhetri"],
                    answer: "Chhetri"
                },
                {
                    question: "What is the name of the famous airport in the Solukhumbu region of Nepal?",
                    options: ["Tribhuvan International Airport", "Pokhara International Airport", "Lukla Airport", "Bhairahawa International Airport"],
                    answer: "Lukla Airport"
                },
                {
                    question: "What is the national tree of Nepal?",
                    options: ["Peepal", "Bamboo", "Pine", "Sal"],
                    answer: "Sal"
                },
                {
                    question: "Which famous event is celebrated in Nepal on the 15th day of the month of Chaitra?",
                    options: ["Dashain", "Tihar", "Lhosar", "Holi"],
                    answer: "Dashain"
                },
                {
                    question: "Which animal is considered sacred in Nepal?",
                    options: ["Elephant", "Tiger", "Cow", "Horse"],
                    answer: "Cow"
                },
                {
                    question: "Who is the first Nepali to scale Mount Everest?",
                    options: ["Tenzing Norgay", "Sir Edmund Hillary", "Shrestha Tenzing", "Pasang Lhamu Sherpa"],
                    answer: "Tenzing Norgay"
                },
                {
                    question: "Which UNESCO World Heritage site is located in the Kathmandu Valley?",
                    options: ["Bhaktapur Durbar Square", "Chitwan National Park", "Sagarmatha National Park", "Rara Lake"],
                    answer: "Bhaktapur Durbar Square"
                },
                {
                    question: "What is the primary religion followed in Nepal?",
                    options: ["Hinduism", "Buddhism", "Islam", "Christianity"],
                    answer: "Hinduism"
                },
                {
                    question: "What is the official language of Nepal?",
                    options: ["Hindi", "Nepali", "Maithili", "English"],
                    answer: "Nepali"
                },
                {
                    question: "Which mountain range does Mount Everest belong to?",
                    options: ["Andes", "Himalayas", "Rocky Mountains", "Alps"],
                    answer: "Himalayas"
                },
                {
                    question: "Which city is known as the 'City of Lakes' in Nepal?",
                    options: ["Pokhara", "Kathmandu", "Biratnagar", "Lalitpur"],
                    answer: "Pokhara"
                },
                {
                    question: "Which of the following is a major festival of the Magar people in Nepal?",
                    options: ["Buddha Jayanti", "Maghe Sankranti", "Tihar", "Baisakh 1st"],
                    answer: "Maghe Sankranti"
                },
                {
                    question: "Which famous river originates from the Himalayas and flows through Nepal and India?",
                    options: ["Ganges", "Koshi", "Bagmati", "Mahalungur"],
                    answer: "Koshi"
                },
                {
                    question: "Which ancient city is located in the Kathmandu Valley and is known for its Durbar Square?",
                    options: ["Pokhara", "Lalitpur", "Bhaktapur", "Dharan"],
                    answer: "Bhaktapur"
                },
                {
                    question: "What is the approximate population of Nepal as of 2024?",
                    options: ["30 million", "15 million", "45 million", "60 million"],
                    answer: "30 million"
                },
                {
                    question: "What is the traditional dress worn by Nepali women?",
                    options: ["Sari", "Cholo", "Lehenga", "Gunyo"],
                    answer: "Gunyo"
                },
                {
                    question: "Which Nepali city is known as the 'City of Temples'?",
                    options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhairahawa"],
                    answer: "Kathmandu"
                },
                {
                    question: "Which river is primarily associated with the Kathmandu Valley?",
                    options: ["Bagmati", "Trishuli", "Koshi", "Saptakoshi"],
                    answer: "Bagmati"
                },
                    {
                        question: "Which district is known as the 'Gateway to the Himalayas'?",
                        options: ["Kaski", "Solukhumbu", "Sankhuwasabha", "Rasuwa"],
                        answer: "Rasuwa"
                    },
                    {
                        question: "Which festival is celebrated in Nepal with lighting of oil lamps and candles?",
                        options: ["Tihar", "Dashain", "Maghe Sankranti", "Lhosar"],
                        answer: "Tihar"
                    },
                    {
                        question: "Which mountain range does the Annapurna peak belong to?",
                        options: ["Himalayas", "Karakoram", "Andes", "Rocky Mountains"],
                        answer: "Himalayas"
                    },
                    {
                        question: "What is the currency used in Nepal?",
                        options: ["Nepalese Rupee", "Indian Rupee", "Dollar", "Pound"],
                        answer: "Nepalese Rupee"
                    },
                    {
                        question: "Who was the first woman to be crowned Miss Nepal?",
                        options: ["Aayusha A Joshi", "Madhavi Koirala", "Shristi Shrestha", "Sahila Khatri"],
                        answer: "Madhavi Koirala"
                    },
                    {
                        question: "Which district is famous for its natural beauty and lakes in Nepal?",
                        options: ["Chitwan", "Pokhara", "Kathmandu", "Bhaktapur"],
                        answer: "Pokhara"
                    },
                    {
                        question: "What is the national flower of Nepal?",
                        options: ["Lotus", "Rhododendron", "Tulip", "Rose"],
                        answer: "Rhododendron"
                    },
                    {
                        question: "Which river is the longest in Nepal?",
                        options: ["Koshi", "Karnali", "Bagmati", "Trishuli"],
                        answer: "Karnali"
                    },
                    {
                        question: "Which famous temple is located in the Kathmandu Valley and dedicated to Lord Shiva?",
                        options: ["Pashupatinath", "Swayambhunath", "Lumbini", "Boudhanath"],
                        answer: "Pashupatinath"
                    },
                    {
                        question: "Who was the first President of Nepal?",
                        options: ["Sushila Koirala", "Bidya Devi Bhandari", "Madhav Kumar Nepal", "Pushpa Kamal Dahal"],
                        answer: "Bidya Devi Bhandari"
                    },
                    {
                        question: "What is the tallest waterfall in Nepal?",
                        options: ["Hyatung Waterfall", "Syangja Waterfall", "Annapurna Waterfall", "Rani Pokhari"],
                        answer: "Hyatung Waterfall"
                    },
                    {
                        question: "What is the main religion followed in Nepal?",
                        options: ["Buddhism", "Hinduism", "Christianity", "Islam"],
                        answer: "Hinduism"
                    },
                    {
                        question: "Who was the first Nepalese woman to scale Mount Everest?",
                        options: ["Pasang Lhamu Sherpa", "Maya Sherpa", "Dawa Yangzum Sherpa", "Lila Tamang"],
                        answer: "Pasang Lhamu Sherpa"
                    },
                    {
                        question: "Which ethnic group is the largest in Nepal?",
                        options: ["Chhetri", "Brahmin", "Tamang", "Magar"],
                        answer: "Chhetri"
                    },
                    {
                        question: "Which international organization is headquartered in Kathmandu?",
                        options: ["SAARC", "UNESCO", "WTO", "WHO"],
                        answer: "SAARC"
                    },
                    {
                        question: "Which is the national bird of Nepal?",
                        options: ["Peacock", "Eagle", "Parrot", "Danphe"],
                        answer: "Danphe"
                    },
                    {
                        question: "Which city is the political and administrative capital of Nepal?",
                        options: ["Pokhara", "Kathmandu", "Lalitpur", "Bhaktapur"],
                        answer: "Kathmandu"
                    },
                    {
                        question: "What is the approximate population of Nepal?",
                        options: ["15 million", "20 million", "30 million", "50 million"],
                        answer: "30 million"
                    },
                    {
                        question: "Which Nepali king is credited for abolishing the system of slavery in Nepal?",
                        options: ["King Prithvi Narayan Shah", "King Tribhuvan", "King Birendra", "King Mahendra"],
                        answer: "King Tribhuvan"
                    },
                    {
                        question: "Which is the official language of Nepal?",
                        options: ["English", "Nepali", "Hindi", "Maithili"],
                        answer: "Nepali"
                    },
                    {
                        question: "Which famous river flows through Nepal and is also known as the 'Sorrow of Bihar'?",
                        options: ["Koshi", "Bagmati", "Ganges", "Trishuli"],
                        answer: "Koshi"
                    },
                    {
                        question: "Which is the most famous UNESCO World Heritage Site located in Nepal?",
                        options: ["Lumbini", "Sagarmatha National Park", "Kathmandu Valley", "Chitwan National Park"],
                        answer: "Kathmandu Valley"
                    },
                    {
                        question: "Which is the highest altitude airport in Nepal?",
                        options: ["Tribhuvan International Airport", "Lukla Airport", "Pokhara Airport", "Simikot Airport"],
                        answer: "Lukla Airport"
                    },
                    {
                        question: "What is the traditional dance form in Nepal performed during various celebrations?",
                        options: ["Dandiya", "Bhojpuri", "Tamang Selo", "Puja dance"],
                        answer: "Tamang Selo"
                    },
                    {
                        question: "What is the most popular sport in Nepal?",
                        options: ["Cricket", "Football", "Basketball", "Volleyball"],
                        answer: "Football"
                    },
                    {
                        question: "Which famous national park is located in the Terai region of Nepal?",
                        options: ["Sagarmatha National Park", "Chitwan National Park", "Rara National Park", "Langtang National Park"],
                        answer: "Chitwan National Park"
                    },
                    {
                        question: "Which is the smallest district in Nepal by area?",
                        options: ["Kathmandu", "Bhaktapur", "Lalitpur", "Dhanusa"],
                        answer: "Bhaktapur"
                    },
                    {
                        question: "Which is the second largest city in Nepal by population?",
                        options: ["Pokhara", "Lalitpur", "Biratnagar", "Dharan"],
                        answer: "Biratnagar"
                    },
                    {
                        question: "Who is the first Nepali mountaineer to summit Mount Everest without supplemental oxygen?",
                        options: ["Ang Rita Sherpa", "Tenzing Norgay", "Mingma Sherpa", "Pasang Lhamu Sherpa"],
                        answer: "Ang Rita Sherpa"
                    },
                    {
                        question: "Which of these rivers flows through Kathmandu?",
                        options: ["Koshi", "Bagmati", "Karnali", "Trishuli"],
                        answer: "Bagmati"
                    },
                    {
                        question: "Which district is home to the famous Lumbini, the birthplace of Lord Buddha?",
                        options: ["Rupandehi", "Kapilvastu", "Syangja", "Bhairahawa"],
                        answer: "Rupandehi"
                    },
                    {
                        question: "Which is the most common form of transportation in Nepal's mountainous regions?",
                        options: ["Helicopter", "Car", "Cable car", "Yaks"],
                        answer: "Yaks"
                    },
                    {
                        question: "Who is the national poet of Nepal?",
                        options: ["Laxmi Prasad Devkota", "Bhanubhakta Acharya", "Vishnu Pradeep", "Parijat"],
                        answer: "Laxmi Prasad Devkota"
                    },
                    {
                        question: "What is the highest mountain in Nepal?",
                        options: ["Mount Makalu", "Mount Kanchenjunga", "Mount Everest", "Mount Lhotse"],
                        answer: "Mount Everest"
                    },
                    {
                        question: "Which of the following is a popular pilgrimage site in Nepal?",
                        options: ["Boudhanath Stupa", "Mt. Everest", "Kathmandu Durbar Square", "Pokhara"],
                        answer: "Boudhanath Stupa"
                    },
                    {
                        question: "Which famous Nepalese festival is known for the worship of cows?",
                        options: ["Tihar", "Dashain", "Lhosar", "Maghe Sankranti"],
                        answer: "Tihar"
                    },
                    {
                        question: "Which district in Nepal is famous for its tea gardens?",
                        options: ["Ilam", "Chitwan", "Kavre", "Syangja"],
                        answer: "Ilam"
                    },
                    {
                        question: "Which year did Nepal sign the Sugauli Treaty?",
                        options: ["1815", "1820", "1825", "1830"],
                        answer: "1815"
                    },
                    {
                        question: "Which lake is located near Pokhara and is famous for boating?",
                        options: ["Rara Lake", "Phewa Lake", "Begnas Lake", "Rupse Lake"],
                        answer: "Phewa Lake"
                    },
                    {
                        question: "Which part of Nepal is famous for its dense forests and wildlife?",
                        options: ["Terai", "Himalayas", "Mid-Hills", "Kathmandu Valley"],
                        answer: "Terai"
                    },
                    {
                        question: "Which national park in Nepal is famous for its tigers and rhinos?",
                        options: ["Chitwan National Park", "Sagarmatha National Park", "Bardia National Park", "Langtang National Park"],
                        answer: "Chitwan National Park"
                    },
                    {
                        question: "Who is the first person from Nepal to win a medal at the Olympics?",
                        options: ["Dipendra Rai", "Mirza Ahsan", "Gyan Bahadur Koirala", "Chandrika Bhatta"],
                        answer: "Dipendra Rai"
                    },
                    {
                        question: "What is the approximate area of Nepal?",
                        options: ["147,181 km²", "120,000 km²", "150,000 km²", "200,000 km²"],
                        answer: "147,181 km²"
                    },
                    {
                        question: "Which city is known as the 'City of Palaces' in Nepal?",
                        options: ["Kathmandu", "Lalitpur", "Pokhara", "Bhaktapur"],
                        answer: "Bhaktapur"
                    },
                    {
                        question: "Which is the highest paved road in Nepal?",
                        options: ["Syarpa", "Bhotechaur Road", "Kalapathar Road", "Annapurna Circuit"],
                        answer: "Annapurna Circuit"
                    }
                
            
        
];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timer;
  let shuffledQuestions = [];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.querySelectorAll(".option");
  const scoreElement = document.getElementById("score");
  const timeElement = document.getElementById("time");
  const endSessionButton = document.getElementById("end-session");
  const resultElement = document.getElementById("result");
  const finalScoreElement = document.getElementById("final-score");
  const retryButton = document.getElementById("retry");
  const correctSound = document.getElementById("correct-sound");
  const wrongSound = document.getElementById("wrong-sound");
  
  function shuffleQuestions() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  }
  
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timeElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame(); // End game if timer runs out
      }
    }, 1000);
  }
  
  function loadQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.forEach((option, index) => {
      option.textContent = currentQuestion.options[index];
      option.onclick = () => checkAnswer(currentQuestion.options[index], currentQuestion.answer);
      option.classList.remove("correct", "wrong"); // Reset button styles
    });
    timeLeft = 30;
    timeElement.textContent = timeLeft;
    startTimer();
  }
  
  function checkAnswer(selectedOption, correctAnswer) {
    clearInterval(timer); // Stop the timer
    const selectedButton = Array.from(optionsElement).find(button => button.textContent === selectedOption);
    if (selectedOption === correctAnswer) {
      score += 10;
      correctSound.play();
      if (selectedButton) selectedButton.classList.add("correct"); // Green animation
    } else {
      score -= 5;
      wrongSound.play();
      if (selectedButton) selectedButton.classList.add("wrong"); // Red animation
      // Highlight correct answer
      Array.from(optionsElement).find(button => button.textContent === correctAnswer).classList.add("correct");
    }
    scoreElement.textContent = score;
    setTimeout(nextQuestion, 1000); // Delay for animation
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      loadQuestion();
    } else {
      endGame();
    }
  }
  
  function endGame() {
    clearInterval(timer);
    questionElement.textContent = "Quiz Over!";
    optionsElement.forEach(option => option.style.display = "none");
    resultElement.classList.remove("hidden");
    finalScoreElement.textContent = score;
  }
  
  function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    resultElement.classList.add("hidden");
    optionsElement.forEach(option => {
      option.style.display = "block";
      option.classList.remove("correct", "wrong");
    });
    shuffleQuestions();
    loadQuestion();
  }
  
  endSessionButton.addEventListener("click", endGame);
  retryButton.addEventListener("click", resetGame);
  
  // Initialize the game
  shuffleQuestions();
  loadQuestion();