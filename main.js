// Lógica del menú móvil
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Lógica del formulario de contacto
const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

// El formulario ahora se envía directamente a Formspree, sin necesidad de JavaScript para la lógica de envío.
// El navegador se encargará de enviar los datos al 'action' del formulario.
// Puedes usar un servicio como Formspree.io para recibir los correos.
// El mensaje de confirmación se puede mostrar en una página de éxito de Formspree.

// --- Lógica del Modal de Servicios ---
const serviceItems = document.querySelectorAll('.service-item');
const serviceModal = document.getElementById('service-modal');
const serviceModalTitle = document.getElementById('service-modal-title');
const serviceModalImage = document.getElementById('service-modal-image');
const serviceModalDescription = document.getElementById('service-modal-description');
const serviceModalGallery = document.getElementById('service-modal-gallery');
const closeServiceModalBtn = document.getElementById('close-service-modal-btn');

// Función para abrir el modal de servicio
function openServiceModal(title, imageSrc, description, images) {
    serviceModalTitle.textContent = title;
    serviceModalImage.src = imageSrc;
    serviceModalDescription.textContent = description;

    // Limpiar galería anterior
    serviceModalGallery.innerHTML = '';

    // Llenar la mini galería
    const imageArray = images.split(',');
    imageArray.forEach((imgSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = "Imagen del proyecto";
        imgElement.className = "rounded-lg w-full h-auto object-cover cursor-pointer";
        // Asignar un ID de proyecto basado en el índice
        // Esto es un ejemplo, se debería tener un sistema de IDs real en la base de datos
        const projectIdMap = {
            'https://placehold.co/600x400/2563EB/ffffff?text=Interior+1': 'exterior-paint',
            'https://placehold.co/600x400/2563EB/ffffff?text=Exterior+1': 'exterior-paint',
            'https://placehold.co/600x400/2563EB/ffffff?text=Limpieza+1': 'office-cleaning',
            'https://placehold.co/600x400/2563EB/ffffff?text=Jardin+1': 'living-room-paint',
            'https://placehold.co/600x400/2563EB/ffffff?text=Remodelacion+1': 'kitchen-remodel',
            'https://placehold.co/600x400/2563EB/ffffff?text=Albanileria+1': 'exterior-paint' // Ejemplo, ajusta según tu lógica
        };
        const projectId = projectIdMap[imgSrc.trim()];
        if (projectId) {
            imgElement.addEventListener('click', () => {
                closeServiceModal();
                showProjectPage(projectId);
            });
        }
        serviceModalGallery.appendChild(imgElement);
    });

    serviceModal.classList.remove('hidden');
}

// Función para cerrar el modal de servicio
function closeServiceModal() {
    serviceModal.classList.add('hidden');
}

// Añadir el evento de clic a cada tarjeta de servicio
serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const image = item.getAttribute('data-image');
        const description = item.getAttribute('data-description');
        const images = item.getAttribute('data-images');
        openServiceModal(title, image, description, images);
    });
});

// Añadir evento de clic al botón de cerrar
closeServiceModalBtn.addEventListener('click', closeServiceModal);

// --- Lógica para la "página" de proyecto ---
// Almacena los datos de los proyectos en un objeto para un acceso más fácil
const projectsData = {
    'exterior-paint': {
        title: 'Proyecto de Pintura Exterior en Casa Residencial',
        mainImage: 'https://placehold.co/1200x800/4F46E5/ffffff?text=Pintura+Exterior+Detallada',
        description: 'Este proyecto de gran envergadura consistió en la renovación completa de la fachada de una casa residencial. Utilizamos pinturas de alta calidad y resistencia a los rayos UV para garantizar una protección duradera contra las inclemencias del tiempo y un acabado que no se desvanece con el sol. El proceso incluyó la preparación de la superficie, la reparación de grietas y el sellado de paredes para una aplicación perfecta.',
        gallery: [
            'https://placehold.co/600x400/4F46E5/ffffff?text=Exterior+1',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Exterior+2',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Exterior+3',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Exterior+4'
        ]
    },
    'office-cleaning': {
        title: 'Servicio de Limpieza Profunda en Oficinas',
        mainImage: 'https://placehold.co/1200x800/4F46E5/ffffff?text=Limpieza+Oficina+Detallada',
        description: 'Llevamos a cabo un servicio de limpieza y desinfección integral para un espacio de oficina de 500 m². Nuestro equipo se encargó de la limpieza de cristales, aspirado y lavado de alfombras, desinfección de áreas de alto contacto como escritorios y manijas de puertas, y limpieza de baños y cocinas. El resultado fue un ambiente de trabajo reluciente, higiénico y agradable para todo el personal.',
        gallery: [
            'https://placehold.co/600x400/4F46E5/ffffff?text=Oficina+1',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Oficina+2',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Oficina+3',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Oficina+4'
        ]
    },
    'kitchen-remodel': {
        title: 'Remodelación Integral de Cocina',
        mainImage: 'https://placehold.co/1200x800/4F46E5/ffffff?text=Remodelacion+Cocina+Detallada',
        description: 'Este proyecto transformó por completo una cocina obsoleta en un espacio moderno y funcional. El trabajo incluyó la demolición de azulejos antiguos, la instalación de nuevos gabinetes y encimeras, la colocación de un nuevo piso de baldosas de cerámica y la instalación de grifos y luminarias LED. El resultado final fue una cocina que no solo se ve fantástica, sino que también es mucho más eficiente para el uso diario.',
        gallery: [
            'https://placehold.co/600x400/4F46E5/ffffff?text=Cocina+1',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Cocina+2',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Cocina+3',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Cocina+4'
        ]
    },
    'living-room-paint': {
        title: 'Renovación de Sala de Estar',
        mainImage: 'https://placehold.co/1200x800/4F46E5/ffffff?text=Pintura+Interior+Detallada',
        description: 'Renovamos la sala de estar de una vivienda unifamiliar, aplicando una paleta de colores neutros para crear un ambiente más luminoso y acogedor. Nuestro equipo se encargó de la protección de muebles y pisos, la reparación de pequeñas imperfecciones en las paredes y la aplicación de dos capas de pintura de alta calidad para un acabado uniforme y duradero. Este simple cambio visual revitalizó completamente el espacio.',
        gallery: [
            'https://placehold.co/600x400/4F46E5/ffffff?text=Sala+1',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Sala+2',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Sala+3',
            'https://placehold.co/600x400/4F46E5/ffffff?text=Sala+4'
        ]
    }
};

const mainContent = document.getElementById('main-content');
const projectPage = document.getElementById('project-page');
const backBtn = document.getElementById('back-btn');
const projectTitle = document.getElementById('project-title');
const projectMainImage = document.getElementById('project-main-image');
const projectDescription = document.getElementById('project-description');
const projectGallery = document.getElementById('project-gallery');
const galleryItems = document.querySelectorAll('.gallery-item');

// Función para mostrar la página del proyecto
function showProjectPage(projectId) {
    const project = projectsData[projectId];
    if (!project) return; // Salir si el proyecto no se encuentra

    // Ocultar el contenido principal y mostrar la página del proyecto
    mainContent.style.display = 'none';
    projectPage.style.display = 'block';
    window.scrollTo(0, 0); // Desplazar al inicio de la página

    // Rellenar la página con los datos del proyecto
    projectTitle.textContent = project.title;
    projectMainImage.src = project.mainImage;
    projectDescription.textContent = project.description;

    // Limpiar la galería anterior y añadir las nuevas imágenes
    projectGallery.innerHTML = '';
    project.gallery.forEach(imgSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = "Imagen del proyecto";
        imgElement.className = "rounded-lg w-full h-auto object-cover shadow-md";
        projectGallery.appendChild(imgElement);
    });
}

// Función para volver a la página principal
function showMainContent() {
    mainContent.style.display = 'block';
    projectPage.style.display = 'none';
    window.scrollTo(0, 0); // Desplazar al inicio de la página
}

// Añadir evento de clic a cada imagen de la galería
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project-id');
        showProjectPage(projectId);
    });
});

// Añadir evento de clic al botón de volver
backBtn.addEventListener('click', showMainContent);
