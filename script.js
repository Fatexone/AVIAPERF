document.addEventListener('DOMContentLoaded', () => {
    const aircraftSelect = document.getElementById('aircraft-select');
    const aircraftInfo = document.getElementById('aircraft-info');
    const performanceCalculator = document.getElementById('performance-calculator');
    const performanceForm = document.getElementById('performance-form');
    const performanceResults = document.getElementById('performance-results');

    aircraftSelect.addEventListener('change', (event) => {
        const selectedAircraft = event.target.value;

        if (selectedAircraft) {
            displayAircraftInfo(selectedAircraft);
            aircraftInfo.classList.remove('hidden');
            performanceCalculator.classList.remove('hidden');
        } else {
            aircraftInfo.classList.add('hidden');
            performanceCalculator.classList.add('hidden');
        }
    });

    performanceForm.addEventListener('submit', (event) => {
        event.preventDefault();
        calculatePerformance();
    });

    function displayAircraftInfo(aircraft) {
        const aircraftData = {
            "DR400 180": {
                description: "Description de l'avion DR400 180",
                vitesseRotation: "60 nœuds (111 km/h)",
                vitesseMonteeInitiale: "75 nœuds (139 km/h)",
                vitesseMonteeNormale: "80 nœuds (148 km/h)",
                vitesseFinesse: "95 nœuds (176 km/h)",
                vitesseCroisiere: "120 nœuds (222 km/h)",
                ventTraversMax: "17 nœuds (31 km/h)",
                capaciteCarburant: "110 L",
                distanceParcourue: "900 NM (1667 km)",
                MTOW: "1100 kg",
                porteeMax: "850 NM (1574 km)",
                consoCroisiere: "30 L/h",
                plafondService: "15000 ft",
                tauxMonteeInitial: "800 ft/min",
                longueurPisteDecollage: "400 m",
                longueurPisteAtterrissage: "450 m",
                dureeVolReservoirPlein: "6 h",
                schema: "images/schema_dr400_180.png",
                panneAvantVR: "Procédure en cas de panne avant VR : <details>",
                panneApresVR: "Procédure en cas de panne après VR : <details>"
            },
            "DR400 160": {
                description: "Description de l'avion DR400 160",
                vitesseRotation: "55 nœuds (102 km/h)",
                vitesseMonteeInitiale: "70 nœuds (130 km/h)",
                vitesseMonteeNormale: "75 nœuds (139 km/h)",
                vitesseFinesse: "90 nœuds (167 km/h)",
                vitesseCroisiere: "114 nœuds (211 km/h)",
                ventTraversMax: "15 nœuds (28 km/h)",
                capaciteCarburant: "110 L",
                distanceParcourue: "850 NM (1574 km)",
                MTOW: "1100 kg",
                porteeMax: "800 NM (1482 km)",
                consoCroisiere: "28 L/h",
                plafondService: "13500 ft",
                tauxMonteeInitial: "700 ft/min",
                longueurPisteDecollage: "420 m",
                longueurPisteAtterrissage: "460 m",
                dureeVolReservoirPlein: "5 h",
                schema: "images/schema_dr400_160.png",
                panneAvantVR: "Procédure en cas de panne avant VR : <details>",
                panneApresVR: "Procédure en cas de panne après VR : <details>"
            },
            "CESSNA172 180": {
                description: "Description de l'avion Cessna 172S Skyhawk",
                vitesseRotation: "55 nœuds (102 km/h)",
                vitesseMonteeInitiale: "74 nœuds (137 km/h)",
                vitesseMonteeNormale: "70 nœuds (130 km/h)",
                vitesseFinesse: "68 nœuds (126 km/h)",
                vitesseCroisiere: "124 nœuds (230 km/h)",
                ventTraversMax: "15 nœuds (28 km/h)",
                capaciteCarburant: "212 L",
                distanceParcourue: "640 NM (1185 km)",
                MTOW: "1111 kg",
                porteeMax: "640 NM (1185 km)",
                consoCroisiere: "32 L/h",
                plafondService: "14000 ft",
                tauxMonteeInitial: "720 ft/min",
                longueurPisteDecollage: "293 m",
                longueurPisteAtterrissage: "175 m",
                dureeVolReservoirPlein: "5 h",
                schema: "images/schema_cessna172_180.png",
                panneAvantVR: "Procédure en cas de panne avant VR : <details>",
                panneApresVR: "Procédure en cas de panne après VR : <details>"
            },
            "CESSNA172 NN": {
                description: "Description de l'avion Cessna 172G",
                vitesseRotation: "55 nœuds (102 km/h)",
                vitesseMonteeInitiale: "70 nœuds (130 km/h)",
                vitesseMonteeNormale: "65 nœuds (120 km/h)",
                vitesseFinesse: "65 nœuds (120 km/h)",
                vitesseCroisiere: "114 nœuds (211 km/h)",
                ventTraversMax: "15 nœuds (28 km/h)",
                capaciteCarburant: "159 L",
                distanceParcourue: "515 NM (953 km)",
                MTOW: "1043 kg",
                porteeMax: "515 NM (953 km)",
                consoCroisiere: "26.5 L/h",
                plafondService: "13100 ft",
                tauxMonteeInitial: "645 ft/min",
                longueurPisteDecollage: "465 m",
                longueurPisteAtterrissage: "381 m",
                dureeVolReservoirPlein: "4 h",
                schema: "images/schema_cessna172_nn.png",
                panneAvantVR: "Procédure en cas de panne avant VR : <details>",
                panneApresVR: "Procédure en cas de panne après VR : <details>"
            },
            "CESSNA172 FP": {
                description: "Description de l'avion Cessna 172P",
                vitesseRotation: "55 nœuds (102 km/h)",
                vitesseMonteeInitiale: "70 nœuds (130 km/h)",
                vitesseMonteeNormale: "65 nœuds (120 km/h)",
                vitesseFinesse: "65 nœuds (120 km/h)",
                vitesseCroisiere: "115 nœuds (213 km/h)",
                ventTraversMax: "15 nœuds (28 km/h)",
                capaciteCarburant: "159 L",
                distanceParcourue: "500 NM (926 km)",
                MTOW: "1043 kg",
                porteeMax: "500 NM (926 km)",
                consoCroisiere: "27 L/h",
                plafondService: "14000 ft",
                tauxMonteeInitial: "645 ft/min",
                longueurPisteDecollage: "495 m",
                longueurPisteAtterrissage: "400 m",
                dureeVolReservoirPlein: "4 h",
                schema: "images/schema_cessna172_fp.png",
                panneAvantVR: "Procédure en cas de panne avant VR : <details>",
                panneApresVR: "Procédure en cas de panne après VR : <details>"
            }
        };

        const data = aircraftData[aircraft];

        if (!data) {
            console.error('Aucune donnée trouvée pour l\'avion sélectionné:', aircraft);
            return;
        }

        const infoDiv = document.getElementById('aircraft-info');
        infoDiv.innerHTML = `
            <h2>${aircraft}</h2>
            <p>${data.description}</p>
            <ul>
                <li>Vitesse de rotation: ${data.vitesseRotation}</li>
                <li>Vitesse de montée initiale: ${data.vitesseMonteeInitiale}</li>
                <li>Vitesse de montée normale: ${data.vitesseMonteeNormale}</li>
                <li>Vitesse de finesse: ${data.vitesseFinesse}</li>
                <li>Vitesse de croisière: ${data.vitesseCroisiere}</li>
                <li>Vent de travers max pour atterrissage: ${data.ventTraversMax}</li>
                <li>Capacité de carburant: ${data.capaciteCarburant}</li>
                <li>Distance parcourue: ${data.distanceParcourue}</li>
                <li>Poids maximal au décollage (MTOW): ${data.MTOW}</li>
                <li>Portée maximale: ${data.porteeMax}</li>
                <li>Consommation de carburant en croisière: ${data.consoCroisiere}</li>
                <li>Plafond de service: ${data.plafondService}</li>
                <li>Taux de montée initiale (en pieds par minute): ${data.tauxMonteeInitial}</li>
                <li>Longueur de piste nécessaire au décollage: ${data.longueurPisteDecollage}</li>
                <li>Longueur de piste nécessaire à l'atterrissage: ${data.longueurPisteAtterrissage}</li>
                <li>Durée de vol avec réservoir plein: ${data.dureeVolReservoirPlein}</li>
                <li>Schéma ou image de l'avion: <img src="${data.schema}" alt="Schema de l'avion" /></li>
                <li>Procédures en cas de panne avant VR: ${data.panneAvantVR}</li>
                <li>Procédures en cas de panne après VR: ${data.panneApresVR}</li>
            </ul>
        `;
    }

    function calculatePerformance() {
        const pilotWeight = parseFloat(document.getElementById('pilot-weight').value);
        const copilotWeight = parseFloat(document.getElementById('copilot-weight').value);
        const passengerWeight = parseFloat(document.getElementById('passenger-weight').value);
        const baggageWeight = parseFloat(document.getElementById('baggage-weight').value);
        const fuelQuantity = parseFloat(document.getElementById('fuel-quantity').value);
        const temperature = parseFloat(document.getElementById('temperature').value);
        const altitude = parseFloat(document.getElementById('altitude').value);
        const qnh = parseFloat(document.getElementById('qnh').value);
        const runwaySlope = parseFloat(document.getElementById('runway-slope').value);
        const vs0 = parseFloat(document.getElementById('vs0').value);

        // Conversion du carburant en poids
        const fuelWeight = fuelQuantity * 0.72; // 0.72 kg/L pour le carburant

        // Calculer le poids total
        const totalWeight = pilotWeight + copilotWeight + passengerWeight + baggageWeight + fuelWeight;
        const mtow = 1100; // Poids maximum au décollage

        // Calcul de l'altitude pression
        const pressureAltitude = altitude + 27 * (1013.25 - qnh);

        // Calcul de la température ISA
        const isaTemperature = 15 - (2 * altitude / 1000);

        // Calcul de l'altitude densité
        const densityAltitude = pressureAltitude + 120 * (temperature - isaTemperature);

        // Calcul de la distance de décollage ajustée
        const takeoffDistance = calculateTakeoffDistance(totalWeight, densityAltitude, runwaySlope, mtow);

        // Calcul de la distance d'atterrissage ajustée
        const landingDistance = calculateLandingDistance(totalWeight, densityAltitude, runwaySlope, mtow);

        // Afficher les résultats
        performanceResults.innerHTML = `
            <h3>Résultats du Calcul</h3>
            <p>Poids total: ${totalWeight.toFixed(2)} kg</p>
            <p>Altitude pression: ${pressureAltitude.toFixed(2)} ft</p>
            <p>Altitude densité: ${densityAltitude.toFixed(2)} ft</p>
            <p>Distance de décollage ajustée: ${takeoffDistance.toFixed(2)} m</p>
            <p>Distance d'atterrissage ajustée: ${landingDistance.toFixed(2)} m</p>
            <p>Vitesse de décrochage (VS0): ${vs0.toFixed(2)} nœuds</p>
        `;
        performanceResults.classList.remove('hidden');
    }

    function calculateTakeoffDistance(weight, densityAltitude, slope, mtow) {
        const baseDistance = 400; // Distance de décollage de base en mètres
        const weightFactor = (weight - mtow) / mtow * 0.20; // Augmentation de 20% par 10% de poids supplémentaire
        const altitudeFactor = densityAltitude / 1000 * 0.12; // 12% d'augmentation par 1000 ft d'altitude densité
        const slopeFactor = slope / 100 * 0.10; // 10% d'augmentation par 1% d'inclinaison de piste
        const windFactor = 1.10; // 10% d'augmentation pour un vent arrière de 2 kt
        return baseDistance * (1 + weightFactor + altitudeFactor + slopeFactor) * windFactor;
    }

    function calculateLandingDistance(weight, densityAltitude, slope, mtow) {
        const baseDistance = 450; // Distance d'atterrissage de base en mètres
        const weightFactor = (weight - mtow) / mtow * 0.10; // Augmentation de 10% par 10% de poids supplémentaire
        const altitudeFactor = densityAltitude / 1000 * 0.03; // 3% d'augmentation par 1000 ft d'altitude densité
        let slopeFactor = 1; // Coefficient par défaut pour la pente

        // Appliquer les coefficients spécifiques pour la pente
        switch(slope) {
            case 0:
                slopeFactor = 1.0;
                break;
            case 6:
                slopeFactor = 0.7;
                break;
            case 10:
                slopeFactor = 0.6;
                break;
            case 15:
                slopeFactor = 0.5;
                break;
            case 20:
                slopeFactor = 0.4;
                break;
            default:
                slopeFactor = 1; // Coefficient par défaut si la pente est hors spécifications
        }

        const windFactor = 1.20; // 20% d'augmentation pour un vent arrière de 2 kt
        return baseDistance * (1 + weightFactor + altitudeFactor) * slopeFactor * windFactor;
    }
});
