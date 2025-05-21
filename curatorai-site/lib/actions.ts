'use server';

import { z } from "zod";
import { Resend } from 'resend';



const resend = new Resend(process.env.RESEND_CLIENT);




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
  
  	const date = new Date().toISOString().split('T')[0];

  	try {
		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: 'CuratorAI Forms <forms@curatorai.dev>', // This domain must be verified in Resend
			to: 'hello@curatorai.dev',
			subject: `New Form Submission: ${firstName} ${lastName}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${firstName} ${lastName}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Phone:</strong> ${phone}</p>
				<p><strong>Institution:</strong> ${institution}</p>
				<p><strong>Job Title:</strong> ${jobTitle}</p>
				<p><strong>Interest:</strong> ${interest}</p>
				<p><strong>Message:</strong> ${message}</p>
				<p><strong>Date:</strong> ${date}</p>
			`,
		});
		
		if (error) {
			console.error('Email sending failed:', error);
			throw new Error('Failed to send email notification');
		}
		
		
	} catch (error) {
		console.error('Form submission error:', error);
		throw new Error('Form submission failed');
	}
}




export async function getSmallFormData(formData: FormData) {
	const { 
		name, 
		email, 
		institution, 
		message 
	} = SmallFormSchema.parse({
	  	name: formData.get('name'),
	  	email: formData.get('email'),
	  	institution: formData.get('institution'),
	  	message: formData.get('message'),
	});
	
	const date = new Date().toISOString().split('T')[0];
  
	try {
		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: 'CuratorAI Forms <forms@curatorai.dev>', // Make sure this domain is verified
			to: 'hello@curatorai.dev',
			subject: `New Quick Contact: ${name}`,
			html: `
			<h2>New Quick Contact Form Submission</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			${institution ? `<p><strong>Institution:</strong> ${institution}</p>` : ''}
			${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
			<p><strong>Date:</strong> ${date}</p>
			`,
		});
	  
		if (error) {
			console.error('Email sending failed:', error);
			throw new Error('Failed to send email notification');
		}
	  
	
	} catch (error) {
		console.error('Form submission error:', error);
		throw new Error('Form submission failed');
	}
}







export async function getEmailFormData(formData: FormData) {
	const { email } = EmailFormSchema.parse({
	  	email: formData.get('email')
	});
	
	const date = new Date().toISOString().split('T')[0];
  
	// Import and initialize Resend should be at the top of your file, not here
	try {
		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: 'CuratorAI Forms <forms@curatorai.dev>',
			to: 'hello@curatorai.dev',
			subject: 'New Email Subscription',
			html: `
				<h2>New Email Submission</h2>
				<p><strong>Email Address:</strong> ${email}</p>
				<p><strong>Date:</strong> ${date}</p>
				<p>This user has submitted their email address through your email capture form.</p>
			`,
		});
		
		if (error) {
			console.error('Email notification failed:', error);
			throw new Error('Failed to send email notification');
		}
	  
	
	} catch (error) {
	  	console.error('Email form submission error:', error);
	  	throw new Error('Email form submission failed');
	}
}


