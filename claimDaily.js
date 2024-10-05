require('dotenv').config();
const axios = require('axios');

async function getQuery(query) {
    const { data } = await axios({
        url: 'https://user-domain.blum.codes/api/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP',
        method: "POST",
        data: { query }
    });
    return `Bearer ${data.token.access}`;
}

async function getPlay(token) {
    const { data } = await axios({
        url: 'https://game-domain.blum.codes/api/v1/daily-reward?offset=-420',
        method: "POST",
        headers: { Authorization: token },
        data: null
    });
    return data;
}

async function processQueriess() {
    const queries = [
        process.env.QUERY_1,
        process.env.QUERY_2,
        process.env.QUERY_3,
        process.env.QUERY_4,
        process.env.QUERY_5,
        process.env.QUERY_6,
        process.env.QUERY_7,
        process.env.QUERY_8,
        process.env.QUERY_9,
        process.env.QUERY_10,
        process.env.QUERY_11,
        process.env.QUERY_12,
        process.env.QUERY_13,
        process.env.QUERY_14,
        process.env.QUERY_15,
        process.env.QUERY_16,
        process.env.QUERY_17,
        process.env.QUERY_18,
        process.env.QUERY_19,
        process.env.QUERY_20,




    ];

    for (const query of queries) {
        try {
            const token = await getQuery(query);
            const farming = await getPlay(token);
            console.log("Success:", farming);
        } catch (error) {
            console.log("Error:", error.message);
        }
    }
}




module.exports = {
 processQueriess
}
