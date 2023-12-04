/* eslint-disable max-len */
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, {useEffect} from 'react';
import Button from '../components/atoms/Button';
import GrizouConsultant from '../components/molecules/GrizouContest/GrizouConsultant';
import GrizouOffer from '../components/molecules/GrizouContest/GrizouOffer';
import Section from '../components/organisms/Section';

const GrizouContest: NextPage = () => {
	const formRef = React.useRef<HTMLElement>(null);
	const scrollIntoView = (ref: React.RefObject<HTMLElement>) => {
		if (!ref.current) return;

		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	useEffect(() => {
		import('react-facebook-pixel')
			.then((x) => x.default)
			.then((ReactPixel) => {
				ReactPixel.init('886720519156124'); // facebookPixelId
				ReactPixel.pageView();
			});
	}, []);

	return (
		<>
			<Head>
				<title>Feldrise - Le concours Grizou</title>
				<meta
					name="description"
					content="Feldrise s'associe à Vieux Grizou pour un concours d'une valeur de 10k euros pour vous aider à lancer ou améliorer votre business !"
				/>

				<meta property="og:title" content="Feldrise - Le concours Grizou" />
				<meta
					property="og:description"
					content="Feldrise s'associe à Vieux Grizou pour un concours d'une valeur de 10k euros pour vous aider à lancer ou améliorer votre business !"
				/>
				<meta property="og:url" content="https://feldrise.com" />
				<meta property="og:image" content="https://feldrise.com/images/logo-white-small.png" />
			</Head>
			<div className="w-full grow flex flex-col-reverse items-center justify-center mx-0 px-0
							2xl:relative 2xl:h-[calc(100vh-(138px))] 2xl:overflow-hidden">
				<Section
					className='w-full lg py-12 px-[2rem] md:px-[5rem]
							   2xl:h-full 2xl:pr-[5rem] 2xl:pl-[10rem] 2xl:block 2xl:absolute 2xl:left-0 2xl:w-1/2 2xl:overflow-y-auto'
					ref={formRef}
				>
					{/* <GrizouContestForm
						onSuccess={() => {
							import('react-facebook-pixel')
								.then((x) => x.default)
								.then((ReactPixel) => {
									ReactPixel.trackSingle('886720519156124', 'SubmitApplication');
								});
						}}
					/> */}
					<div className='w-full py-4 px-4 mb-6 bg-amber-500 rounded-xl text-black font-bold text-center'>
						<p>
							C&apos;est terminé ! Merci a tous les participants ! 💖
						</p>
					</div>
				</Section>
				<div className='w-full grow  py-12 px-[2rem] md:px-[5rem]
								2xl:h-full 2xl:w-1/2 2xl:pl-[5rem] 2xl:pr-[10rem] 2xl:block 2xl:absolute 2xl:right-0 2xl:overflow-y-auto' style={{
					backgroundImage: 'url("/images/cat-background.svg")',
					backgroundSize: 'cover',
				}}>
					<div className='my-8 p-6 bg-primary text-center rounded-xl'>
						<h1 className='text-4xl'>Concours Grizou</h1>
					</div>
					<div className='w-full flex flex-col items-center bg-white text-black px-6 py-4 rounded-xl gap-8'>
						{/* Le profil de Xavier */}
						<div className='w-full flex flex-row'>
							<div className='flex items-center justify-center'>
								<Image
									src='/grizou-contest/xavier.jpg' alt="Image de Xavier"
									width={124} height={124}
									className='rounded-full height-full' />
							</div>
							<div className='w-full pl-8 py-4 flex flex-col gap-2'>
								<div className='w-full flex flex-col md:flex-row md:items-center'>
									<h2 className='text-2xl pr-4'>Vieux Grizou</h2>
									<a
										href="https://twitter.com/VieuxGrizou/status/1601203507696001026?s=20&t=GZJQSWtgrYV_ESsspAS4mA"
										target="_blank" rel="noreferrer"
									>
										<FontAwesomeIcon icon={faTwitterSquare} className="text-3xl text-primary"/>
									</a>
								</div>
								<p>J&apos;ai créé un concours unique pour soutenir un futur entrepreneur.</p>
							</div>
						</div>
						<div className='h-1 bg-primary w-3/4' />

						{/* Le concours */}
						<div className='w-full flex flex-col gap-4'>
							<h2 className='text-xl'>Le concours</h2>
							<p>
								Pour propulser le projet d&apos;une personne et ne pas simplement proposer un service ou un objet
								gratuit. De la conception au mindset, de l&apos;administratif à la technique, si votre projet est
								sélectionné, il sera sur de bons rails. Le projet sera soutenu par des cadors du web et de
								l&apos;entreprenariat.
							</p>
							<Button
								className='bg-secondary text-white 2xl:hidden'
								onClick={() => scrollIntoView(formRef)}
							>
								Je participe
							</Button>
						</div>
						<div className='h-1 bg-primary w-3/4' />

						{/* Le contenue */}
						<div className='w-full flex flex-col gap-2'>
							<h2 className='text-xl hidden'>Le contenue</h2>
							<GrizouOffer
								author='Vieux Grizou'
								site='https://twitter.com/VieuxGrizou'
							>
								<ul className='list-disc pl-4'>
									<li>12 Backlinks  <a className='text-secondary' href="https://savage-dreams.com/" target="_blank" rel="noreferrer">https://savage-dreams.com/</a> (1 par mois)</li>
									<li>12 packs de RFR sur <a className='text-secondary' href="https://tontexte.com/" target="_blank" rel="noreferrer">https://tontexte.com/</a>  (1 par mois)</li>
									<li>1 an d&apos;abonnement <a className='text-secondary' href="https://webeditor.network/" target="_blank" rel="noreferrer">https://webeditor.network/</a> pour suivre et monitorer ton site web</li>
									<li>1 an d&apos;abonnement <a className='text-secondary' href="https://emelia.io/" target="_blank" rel="noreferrer">https://emelia.io/</a> pour la prospection par mail</li>
									<li>12 mois d&apos;accompagnement business sur ton projet</li>
								</ul>
								<div className='h-4'/>
								<h3 className='text-lg'>Ils offrent aussi des Backlinks</h3>
								<ul className='list-disc pl-8'>
									<li className='py-2'>Mohamed <div className='inline bg-secondary p-2 rounded-lg'><a className='text-white text-sm' href='https://linkuma.com/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} /> Linkuma</a></div></li>
									<li className='py-2'>L.Jee - Olivier <div className='inline bg-secondary p-2 rounded-lg'><a className='text-white text-sm' href='https://www.accesslink.fr/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} /> Access Link</a></div></li>
								</ul>
							</GrizouOffer>

							<GrizouOffer
								author='Feldrise'
								site='https://feldrise.com'
							>
								<p>Un accompagnement et une formation sur les outils de NoCode pour développer, automatiser et améliorer votre projet.</p>
							</GrizouOffer>

							<GrizouOffer
								author='Gurrenmeta'
								site='https://twitter.com/gurrenmeta'
							>
								<p>
									Refonte d&apos;un site ou aide à la création du site.
								</p>
							</GrizouOffer>

							<GrizouOffer
								author='Baptiste Guiraud'
								site='https://twitter.com/tistou80'
							>
								Une formation IA
							</GrizouOffer>

							<GrizouOffer
								author='Sylvain Peyronnet'
								site=''
							>
								<p>
									12 mois d’abonnement seotxl.
								</p>
							</GrizouOffer>

							<GrizouOffer
								author='@FlyderIO'
								site='https://flyder.io/'
							>
								<p>Le plan Omnipresent sur Flyder, 10k de recherches par mois</p>
							</GrizouOffer>
						</div>
						<div className='h-1 bg-primary w-3/4' />

						{/* Les consultants */}
						<div className='w-full flex flex-col items-start gap-2'>
							<div className='px-4 py-2 bg-secondary rounded-xl'>
								<h2 className='flex text-xl text-white'>Les offres des consultants</h2>
							</div>
							<div className='h-4' />

							<GrizouConsultant
								author='Abdel'
								site='https://twitter.com/abdelwebseller'
								image='abdel.jpg'
								content="1h sur l'e-commerce et l'acquisition ainsi que les business en franchise"
							/>
							<div className='w-1/3 bg-secondary h-[2px]' />
							<GrizouConsultant
								author='André ROUSSARD (Avocat)'
								site='https://stellor.com'
								image='andre.jpg'
								content='1h en one to one pour vous conseiller sur votre projet sur le juridique.'
							/>
							<div className='w-1/3 bg-secondary h-[2px]' />
							<GrizouConsultant
								author='Elliott BOBIET'
								site='https://twitter.com/Elliott_bobiet'
								image='eliot.jpg'
								content='2h de one to one en ECommerce / Business .'
							/>
							<div className='w-1/3 bg-secondary h-[2px]' />
							<GrizouConsultant
								author='Jonathan ASSOULINE'
								site='https://com-maker.fr/'
								image='jonathan.jpg'
								content='1h en one to one pour vous conseiller sur votre projet en marketing.'
							/>
							<div className='w-1/3 bg-secondary h-[2px]' />
							<GrizouConsultant
								author='Julien JIMENEZ'
								site='https://www.korleon-biz.com/'
								image='julien.jpg'
								content='1h en one to one pour vous conseiller sur votre projet en seo et un site internet.'
							/>
							<div className='w-1/3 bg-secondary h-[2px]' />
							<GrizouConsultant
								author='Kévin JOURDAN'
								site='https://www.dotmarket.eu/'
								image='kevin.jpg'
								content='1h en one to one pour vous conseiller sur votre projet côté business.'
							/>
							<div className='w-1/3 bg-secondary h-[2px]' />
							<GrizouConsultant
								author='Le W - William PICHON'
								site='https://fr.reddotgrowth.com/'
								image='william.jpg'
								content='2h en one to one pour vous conseiller sur votre projet pour faire de la croissance.'
							/>
							<Button
								className='bg-secondary text-white 2xl:hidden'
								onClick={() => scrollIntoView(formRef)}
							>
								Je participe
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GrizouContest;