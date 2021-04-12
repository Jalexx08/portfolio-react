import React from 'react';
import imgProfile from '../../assets/img/perfil.jpg';

const AboutmeScreen = () => {
	return (
		<div className="container mx-auto">
			<h1 className="title">¿Quién soy?</h1>
			<figure className="overflow-hidden w-40 mx-auto mt-5">
				<img src={imgProfile} alt="profile" />
			</figure>
			<article className ="my-10 p-4 md:p-16 lg:w-2/3 lg: mx-auto bg-blue-600">
				<p className="paragraph">
					Soy un profesional graduado
					en ingeniería electrónica en la ciudad de Medellín. Allí
					descubrí el gran arte de programar y poco a poco se fue convirtiendo 
					en mi verdadera pasión.
				</p>
				<p className="paragraph">
					Mi primer lenguaje de programación fue Visual Basic , pasando a
					programar microcontroladores en lenguaje de bajo nivel, como Assembly
					 y también en alto nivel con la ayuda de PicBasic y C.
				</p>
				<p className="paragraph">
					Actualmente todo mi enfoque está en desarrollar habilidades necesarias,
					para tener un buen dominio en el lenguaje JavaScript y crear
					aplicaiones completas. Tengo cierto background en Angular, React y
					Node; en donde cada día me encuentro mejorando y aprendiendo cosas
					nuevas.
				</p>
				<p className="paragraph">
					Estoy sumamente emocionado en poder crear aplicaciones tanto para la
					web como para los dispositvos móviles. Aprender Ionic y React Native
					son mis proximos pasos para lograr el objetivo.
				</p>
				<p className="paragraph">
					Hay varias tecnologías allí afuera que son muy intersantes y no
					descartaría la posiblidad de aprenderlas; pero hay una que me llama
					fuertemente la atención y es Dart con Flutter. He visto
					grandes obras de artes hechas con él, y no hay duda que es una
					excelente tecnología a tener en cuenta.
				</p>
			</article>
		</div>
	);
};

export default AboutmeScreen;
