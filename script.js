const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
    });
});

const page = document.body.dataset.page;
if (page) {
    const currentLink = document.querySelector(`.nav-link[data-page="${page}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// Smooth scroll for in-page anchors
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', event => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            event.preventDefault();
            const offsetTop = target.offsetTop - 90;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

// Scroll reveal
const animatedItems = document.querySelectorAll('[data-animate]');
if (animatedItems.length) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-animate', 'in');
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedItems.forEach(item => observer.observe(item));
}

// Stats counters
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const countItems = document.querySelectorAll('[data-count]');

const formatCount = (value, element) => {
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    return `${prefix}${value}${suffix}`;
};

const animateCount = (element) => {
    const target = Number(element.dataset.count);
    if (Number.isNaN(target)) {
        return;
    }

    if (prefersReducedMotion) {
        element.textContent = formatCount(target, element);
        return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.round(target * progress);
        element.textContent = formatCount(value, element);
        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
};

if (countItems.length) {
    const countObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    countObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.6 }
    );

    countItems.forEach(item => countObserver.observe(item));
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {
            fullName: document.getElementById('fullName').value,
            workEmail: document.getElementById('workEmail').value,
            companyName: document.getElementById('companyName').value,
            primaryObjective: document.getElementById('primaryObjective').value,
            message: document.getElementById('message').value
        };
        console.log('Form submitted:', formData);
        alert('Thanks for reaching out. We will respond within 2 business days.');
        contactForm.reset();
    });
}

const setMetric = (module, key, value) => {
    const meter = module.querySelector(`[data-meter="${key}"]`);
    const label = module.querySelector(`[data-value="${key}"]`);
    const safeValue = Math.max(0, Math.min(100, Math.round(value)));
    if (meter) {
        meter.style.width = `${safeValue}%`;
    }
    if (label) {
        label.textContent = `${safeValue}%`;
    }
};

// Reward shaping playground
const rewardModule = document.querySelector('[data-playground="reward"]');
if (rewardModule) {
    const frequencyInput = rewardModule.querySelector('[data-control="frequency"]');
    const delayInput = rewardModule.querySelector('[data-control="delay"]');

    const updateRewardMetrics = () => {
        const frequency = Number(frequencyInput.value);
        const delay = Number(delayInput.value);
        const efficiency = 30 + (frequency * 0.6) - (delay * 0.2);
        const stability = 45 + (frequency * 0.4) - (Math.abs(60 - delay) * 0.3);
        setMetric(rewardModule, 'efficiency', efficiency);
        setMetric(rewardModule, 'stability', stability);
    };

    frequencyInput.addEventListener('input', updateRewardMetrics);
    delayInput.addEventListener('input', updateRewardMetrics);
    updateRewardMetrics();
}

// Vision playground
const visionModule = document.querySelector('[data-playground="vision"]');
if (visionModule) {
    const scenarioButtons = visionModule.querySelectorAll('[data-scenario]');
    const scenarios = {
        retail: { density: 68, precision: 84, latency: 45 },
        logistics: { density: 52, precision: 78, latency: 58 },
        safety: { density: 74, precision: 90, latency: 40 }
    };

    const applyScenario = (key) => {
        const data = scenarios[key];
        if (!data) {
            return;
        }
        setMetric(visionModule, 'density', data.density);
        setMetric(visionModule, 'precision', data.precision);
        setMetric(visionModule, 'latency', data.latency);
    };

    scenarioButtons.forEach(button => {
        button.addEventListener('click', () => {
            scenarioButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyScenario(button.dataset.scenario);
        });
    });

    applyScenario('retail');
}

// Workflow playground
const workflowModule = document.querySelector('[data-playground="workflow"]');
if (workflowModule) {
    const stepInputs = workflowModule.querySelectorAll('[data-step]');

    const updateWorkflowMetrics = () => {
        const total = stepInputs.length;
        const selected = Array.from(stepInputs).filter(input => input.checked).length;
        const coverage = (selected / total) * 100;
        const trace = Math.min(100, coverage * 0.9 + (selected >= 3 ? 15 : 5));
        setMetric(workflowModule, 'coverage', coverage);
        setMetric(workflowModule, 'trace', trace);
    };

    stepInputs.forEach(input => {
        input.addEventListener('change', updateWorkflowMetrics);
    });

    updateWorkflowMetrics();
}
