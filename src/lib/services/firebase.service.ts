/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { variables } from '$lib/variables';

const firebaseConfig = {
	apiKey: variables.fireBaseApiKey,
	authDomain: variables.authDomain,
	projectId: variables.projectId,
	storageBucket: variables.storageBucket,
	messagingSenderId: variables.messagingSenderId,
	appId: variables.appId
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const addDocumentToFireStore = async (): Promise<any> => {
	try {
		const docRef = await addDoc(collection(db, 'testers'), {
			name: 'Tyler Boyd',
			type: 'person'
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};
