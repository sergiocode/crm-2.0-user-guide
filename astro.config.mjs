import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			defaultLocale: 'es',
			locales: {
				// Spanish docs in `src/content/docs/es/`
				es: {
					label: 'Español',
					lang: 'es',
				},
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: {
				github: 'https://github.com/sergiocode',
			},
			logo: {
				light: './src/assets/light-logo.png',
				dark: './src/assets/dark-logo.png',
			},
			sidebar: [
				{
					label: 'Inicio',
					translations: {
						'en': 'Home',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bienvenido', link: '/guia/bienvenido/', translations: { 'en': 'Welcome' } },
						{ label: 'Dashboard', link: '/guia/dashboard/', translations: { 'en': 'Dashboard' } },
						{ label: 'Nuevas funciones', link: '/guia/novedades/', translations: { 'en': 'New features' } },
					],
				},
				{
					label: 'Guía',
					translations: { 'en': 'Guide' },
					autogenerate: { directory: 'clientes' },
					items: [
						{
							label: 'Clientes',
							translations: { 'en': 'Clients' },
							items: [
								{ label: 'General', link: '/guia/clientes/', translations: { 'en': 'General' } },
								{ label: 'Crear un cliente', link: '/guia/crear-cliente/', translations: { 'en': 'Create a client' } },
								{ label: 'Ficha de cliente', link: '/guia/ficha-cliente/', translations: { 'en': 'Client profile' } },
							],
						},
						{
							label: 'Consultas',
							translations: { 'en': 'Consultation' },
							items: [
								{ label: 'Listado', link: '/guia/consultas/', translations: { 'en': 'List' } },
								{ label: 'Página de consulta', link: '/guia/pagina-consulta/', translations: { 'en': 'Consultation page' } },
							],
						},
						{
							label: 'Calendario',
							translations: { 'en': 'Calendar' },
							items: [
								{ label: 'General', link: '/guia/calendario/', translations: { 'en': 'Calendar' } },
								{ label: 'Eventos', link: '/guia/vista-eventos/', translations: { 'en': 'Events' } },
								{ label: 'Tareas', link: '/guia/vista-tareas/', translations: { 'en': 'Tasks' } },
							],
						},
						{
							label: 'Facturación',
							translations: { 'en': 'Invoicing' },
							items: [
								{ label: 'Entradas', link: '/guia/entradas/', translations: { 'en': 'Entries' } },
								{ label: 'Órdenes de trabajo', link: '/guia/ordenes-trabajo/', translations: { 'en': 'Work orders' } },
								{ label: 'Presupuestos', link: '/guia/presupuestos/', translations: { 'en': 'Budgets' } },
								{ label: 'Facturas', link: '/guia/facturas/', translations: { 'en': 'Invoices' } },
							],
						},
					],
				},
			],
		}),
	],
});
