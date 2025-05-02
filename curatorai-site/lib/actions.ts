'use server';

import { z } from "zod";




const BigFormSchema = z.object({
	firstName: z.coerce.string(),
	lastName: z.coerce.string(),
	email: z.coerce.string(),
	phone: z.coerce.string(),
	institution: z.coerce.string(),
	jobTitle: z.coerce.string(),
	interest: z.enum([
		'rag',
		'headless',
		'both',
		'consultation',
		'other'
	]),
	message: z.coerce.string()
});


const SmallFormSchema = z.object({
	name: z.coerce.string(),
	email: z.coerce.string(),
	institution: z.coerce.string().nullish(),
	message: z.coerce.string().nullish(),
});


const EmailFormSchema = z.object({
	email: z.coerce.string()
});




export async function getBigFormData(formData: FormData) {


	const { 
		firstName, 
		lastName, 
		email, 
		phone, 
		institution, 
		jobTitle, 
		interest, 
		message 
	} = BigFormSchema.parse({
		firstName: formData.get('firstName'),
		lastName: formData.get('lastName'),
		email: formData.get('email'),
		phone: formData.get('phone'),
		institution: formData.get('institution'),
		jobTitle: formData.get('jobTitle'),
		interest: formData.get('interest'),
		message: formData.get('message')
	});
	//const date = new Date().toISOString().split('T')[0];


	//console.log("First Name: ", firstName);
	//console.log("Last Name: ", lastName);
	//console.log("Email: ", email);
	//console.log("Phone Number: ", phone);
	//console.log("Institution: ", institution);
	//console.log("Job Title: ", jobTitle);
	//console.log("interest: ", interest);
	//console.log("Message: ", message);
	//console.log("Date: ", date);


}




export async function getSmallFormData(formData: FormData) {


	const { name, email, institution, message } = SmallFormSchema.parse({
		name: formData.get('name'),
		email: formData.get('email'),
		institution: formData.get('institution'),
		message: formData.get('message'),
	})
	//const date = new Date().toISOString().split('T')[0];


	//console.log("Name: ", name);
	//console.log("Email: ", email);
	//console.log("Institution: ", institution);
	//console.log("Message: ", message);
	//console.log("Date: ", date);


}




export async function getEmailFormData(formData: FormData) {


	const { email } = EmailFormSchema.parse({
		email: formData.get('email')
	})
	//const date = new Date().toISOString().split('T')[0];

	//console.log("Email Form Data: ", email);
}





