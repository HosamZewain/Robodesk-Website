
// This is a placeholder for the actual Teams webhook URL
// In a real application, this should be stored securely in an environment variable
const TEAMS_WEBHOOK_URL = 'YOUR_TEAMS_WEBHOOK_URL_HERE';

interface PilotRequestData {
    name: string;
    company: string;
    email: string;
    phone: string;
    brief: string;
}

export const submitToTeams = async (data: PilotRequestData): Promise<void> => {
    if (TEAMS_WEBHOOK_URL === 'YOUR_TEAMS_WEBHOOK_URL_HERE') {
        console.warn('Teams webhook URL not configured. Simulating successful submission.');
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    const card = {
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        "themeColor": "ff6a00",
        "summary": `New Pilot Request from ${data.company}`,
        "sections": [{
            "activityTitle": `🚀 New Free Pilot Request!`,
            "activitySubtitle": `From ${data.name} at ${data.company}`,
            "facts": [
                { "name": "Company", "value": data.company },
                { "name": "Contact Name", "value": data.name },
                { "name": "Email", "value": `[${data.email}](mailto:${data.email})` },
                { "name": "Phone", "value": data.phone },
                { "name": "Brief", "value": data.brief || "No brief provided." }
            ],
            "markdown": true
        }]
    };

    const response = await fetch(TEAMS_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    });

    if (!response.ok) {
        throw new Error(`Failed to send message to Teams. Status: ${response.status}`);
    }
};
