export default function Login() {
    const authId = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDE0YmQzZTA3MGNlN2RlNDJjYzA0Zjg0MmNkNDkwOCIsInN1YiI6IjY1YjFmM2VhNzg1NzBlMDBjOTY3NmIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5MLHIDJthYsEjNI0Ey6chlzw6IqeUf6jzAYVewKvcqA';
    
    async function generateToken() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${authId}`
            }
        };

        try {
            const response = await fetch('https://api.themoviedb.org/3/authentication/token/new', options);
            if (response.ok) {
                const result = await response.json();
                const requestToken = result.request_token;
                handleLogin(requestToken);
            }
        } catch (error) {
            console.log('error creating token');
        }
    }

    function handleLogin(requestToken) {
        try {
            const token = requestToken;
            console.log(requestToken);
            window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173/approved`;
        }
        catch (error) {
            console.log('error while handling login');
        }
    };

    async function generateSessionId() {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const requestToken = searchParams.get('request_token');
            console.log('requestToken  ' + requestToken);

            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: `Bearer ${authId}`
                },
                body: JSON.stringify({ request_token: requestToken })
            };

            const response = await fetch('https://api.themoviedb.org/3/authentication/session/new', options);
            if (response.ok) {
                const result = await response.json();
                console.log('session id is..' + result.session_id);
            }
        } catch (error) {
            console.log('error while generating session id.');
        }
    }
    generateSessionId();

    return (
        <>
            <button onClick={generateToken} className="text-gray-200 bg-gray-700 rounded-lg px-2 py-1">Login</button>
        </>
    );
}