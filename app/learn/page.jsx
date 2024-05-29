import React from 'react';
import dbconnect from '../database/dbconnect.jsx';

export default async function Home() {
    console.log(await dbconnect)
    return (
        <h3>hello world</h3>
    );
}
