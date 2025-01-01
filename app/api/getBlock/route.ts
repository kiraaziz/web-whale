import { NextResponse } from "next/server"
import Datastore from 'nedb';

const db = new Datastore({ filename: './database.db', autoload: true });

export const GET = async () => {
    let data = await new Promise((resolve, reject) => {
        db.find({}, (err: any, docs: any) => {
            if (err) {
                console.error('Error reading from database:', err);
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });

    return NextResponse.json({ data });
}