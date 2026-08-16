document.addEventListener('DOMContentLoaded', () => {

    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.addEventListener('click', () => {
            window.location.href = 'onboarding.html'; 
        });
    }

    const track = document.getElementById('slider-track');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (track && dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                track.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach(d => {
                    d.classList.remove('bg-brand-coklat', 'w-6', 'w-8', 'md:w-8');
                    d.classList.add('bg-brand-gray/40', 'w-2', 'md:w-2.5');
                });
                dot.classList.remove('bg-brand-gray/40', 'w-2', 'md:w-2.5');
                dot.classList.add('bg-brand-coklat', 'w-6', 'md:w-8');
            });
        });
    }

    const skeletonLoader = document.getElementById('skeleton-loader');
    const actualContent = document.getElementById('actual-content');
    
    if (skeletonLoader && actualContent) {
        setTimeout(() => {
            skeletonLoader.classList.add('hidden');
            actualContent.classList.remove('hidden');
            setTimeout(() => {
                actualContent.classList.remove('opacity-0');
            }, 50);
        }, 1200); 
    }

    const notifBtn = document.getElementById('notif-btn');
    const notifModal = document.getElementById('notification-modal');
    const notifOverlay = document.getElementById('notification-overlay');
    const notifCard = document.getElementById('notification-card');
    const closeNotifBtn = document.getElementById('close-notification');

    if (notifBtn && notifModal) {
        const openNotif = () => {
            notifModal.classList.remove('hidden');
            setTimeout(() => {
                notifModal.classList.remove('opacity-0');
                notifCard.classList.remove('scale-95');
            }, 10);
        };
        const closeNotif = () => {
            notifModal.classList.add('opacity-0');
            notifCard.classList.add('scale-95');
            setTimeout(() => {
                notifModal.classList.add('hidden');
            }, 300);
        };
        notifBtn.addEventListener('click', openNotif);
        closeNotifBtn.addEventListener('click', closeNotif);
        notifOverlay.addEventListener('click', closeNotif);
    }

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeMobileBtn = document.getElementById('close-mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        const openMenu = () => {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0');
                mobileDrawer.classList.remove('-translate-x-full');
            }, 10);
        };
        const closeMenu = () => {
            mobileMenu.classList.add('opacity-0');
            mobileDrawer.classList.add('-translate-x-full');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        };
        hamburgerBtn.addEventListener('click', openMenu);
        closeMobileBtn.addEventListener('click', closeMenu);
        mobileOverlay.addEventListener('click', closeMenu);
    }

    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const chatContainer = document.getElementById('chat-container');

    if (chatInput && chatSendBtn && chatContainer) {
        const sendMessage = () => {
            const text = chatInput.value.trim();
            if (!text) return;

            const userBubble = document.createElement('div');
            userBubble.className = 'flex justify-end opacity-0 transition-opacity duration-300';
            userBubble.innerHTML = `<div class="bg-brand-birutua text-brand-cream px-4 py-2.5 rounded-2xl rounded-br-sm text-[0.85rem] shadow-sm max-w-[85%] leading-relaxed">${text}</div>`;
            chatContainer.appendChild(userBubble);
            
            setTimeout(() => userBubble.classList.remove('opacity-0'), 10);
            
            chatInput.value = '';
            userBubble.scrollIntoView({ behavior: 'smooth', block: 'end' });

            setTimeout(() => {
                const botBubble = document.createElement('div');
                botBubble.className = 'flex justify-start opacity-0 transition-opacity duration-300';
                botBubble.innerHTML = `<div class="bg-white border border-gray-100 px-4 py-2.5 rounded-2xl rounded-bl-sm text-[0.85rem] text-brand-birutua shadow-sm max-w-[85%] leading-relaxed"><i class="fa-solid fa-triangle-exclamation text-brand-coklat mr-1.5"></i> Mohon maaf, koneksi jaringan sedang tidak stabil atau kredit AI habis. Silakan coba lagi nanti.</div>`;
                chatContainer.appendChild(botBubble);
                
                setTimeout(() => {
                    botBubble.classList.remove('opacity-0');
                    botBubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }, 10);
                
            }, 1200);
        };

        chatSendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    const toggleInsightsBtn = document.getElementById('toggle-insights-btn');
    const extraInsights = document.querySelectorAll('.insight-extra');

    if (toggleInsightsBtn && extraInsights.length > 0) {
        toggleInsightsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = extraInsights[0].classList.contains('hidden');
            if (isHidden) {
                extraInsights.forEach(el => {
                    el.classList.remove('hidden');
                    el.classList.add('flex');
                });
                toggleInsightsBtn.textContent = 'Hide';
            } else {
                extraInsights.forEach(el => {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                });
                toggleInsightsBtn.textContent = 'See All';
            }
        });
    }

    const toggleOrdersBtn = document.getElementById('toggle-orders-btn');
    const extraOrders = document.querySelectorAll('.order-extra');

    if (toggleOrdersBtn && extraOrders.length > 0) {
        toggleOrdersBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = extraOrders[0].classList.contains('hidden');
            if (isHidden) {
                extraOrders.forEach(el => {
                    el.classList.remove('hidden');
                    el.classList.add('flex');
                });
                toggleOrdersBtn.textContent = 'Hide';
            } else {
                extraOrders.forEach(el => {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                });
                toggleOrdersBtn.textContent = 'See All';
            }
        });
    }

    const searchInput = document.getElementById('search-input');
    const craftItems = document.querySelectorAll('.craft-item');

    if (searchInput && craftItems.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            craftItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const shop = item.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || shop.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.className = 'filter-btn px-5 py-2 rounded-full bg-brand-cream/50 text-brand-gray hover:bg-brand-cream hover:text-brand-birutua transition-colors text-xs md:text-sm font-bold shrink-0';
                });
                btn.className = 'filter-btn px-5 py-2 rounded-full bg-brand-birutua text-brand-cream text-xs md:text-sm font-bold shrink-0 shadow-sm transition-colors';
                
                const filter = btn.getAttribute('data-filter');
                craftItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartCard = document.getElementById('cart-card');
    const closeCartBtn = document.getElementById('close-cart');

    if (cartBtn && cartModal) {
        const openCart = () => {
            cartModal.classList.remove('hidden');
            setTimeout(() => {
                cartModal.classList.remove('opacity-0');
                if(window.innerWidth < 768) {
                    cartCard.classList.remove('translate-y-full');
                } else {
                    cartCard.classList.remove('scale-95');
                }
            }, 10);
        };
        const closeCart = () => {
            cartModal.classList.add('opacity-0');
            if(window.innerWidth < 768) {
                cartCard.classList.add('translate-y-full');
            } else {
                cartCard.classList.add('scale-95');
            }
            setTimeout(() => {
                cartModal.classList.add('hidden');
            }, 300);
        };
        cartBtn.addEventListener('click', openCart);
        closeCartBtn.addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);
    }

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number).replace('Rp', 'Rp ');
    };

    const updateCartTotal = () => {
        const qtyVal = document.querySelector('.qty-val');
        const priceData = document.querySelector('.cart-item-price');
        const totalDisp = document.getElementById('cart-total-price');
        
        if (qtyVal && priceData && totalDisp) {
            const qty = parseInt(qtyVal.textContent);
            const price = parseInt(priceData.getAttribute('data-price'));
            totalDisp.textContent = formatRupiah(qty * price);
        }
    };

    const qtyMinus = document.querySelector('.qty-btn.minus');
    const qtyPlus = document.querySelector('.qty-btn.plus');
    const qtyVal = document.querySelector('.qty-val');

    if (qtyMinus && qtyPlus && qtyVal) {
        qtyMinus.addEventListener('click', () => {
            let current = parseInt(qtyVal.textContent);
            if (current > 1) {
                qtyVal.textContent = current - 1;
                updateCartTotal();
            }
        });
        qtyPlus.addEventListener('click', () => {
            let current = parseInt(qtyVal.textContent);
            qtyVal.textContent = current + 1;
            updateCartTotal();
        });
    }

    const addCartModal = document.getElementById('add-to-cart-modal');
    const addOverlay = document.getElementById('add-overlay');
    const addCard = document.getElementById('add-card');
    const cancelAddBtn = document.getElementById('cancel-add-btn');
    const confirmAddBtn = document.getElementById('confirm-add-btn');
    
    const modalImg = document.getElementById('modal-item-img');
    const modalName = document.getElementById('modal-item-name');
    const modalPrice = document.getElementById('modal-item-price');

    if (addCartModal && craftItems.length > 0) {
        const closeAddModal = () => {
            addCartModal.classList.add('opacity-0');
            addCard.classList.add('scale-95');
            setTimeout(() => {
                addCartModal.classList.add('hidden');
            }, 300);
        };

        craftItems.forEach(item => {
            item.addEventListener('click', () => {
                const name = item.getAttribute('data-name');
                const price = item.getAttribute('data-price');
                const img = item.querySelector('img').src; 

                if (modalImg && modalName && modalPrice) {
                    modalImg.src = img;
                    modalName.textContent = name;
                    modalPrice.textContent = formatRupiah(price);
                }

                addCartModal.classList.remove('hidden');
                setTimeout(() => {
                    addCartModal.classList.remove('opacity-0');
                    addCard.classList.remove('scale-95');
                }, 10);
            });
        });

        if(cancelAddBtn) cancelAddBtn.addEventListener('click', closeAddModal);
        if(confirmAddBtn) {
            confirmAddBtn.addEventListener('click', () => {
                confirmAddBtn.textContent = 'Ditambahkan!';
                confirmAddBtn.classList.remove('bg-brand-coklat');
                confirmAddBtn.classList.add('bg-green-600');
                setTimeout(() => {
                    closeAddModal();
                    setTimeout(() => {
                        confirmAddBtn.textContent = 'Tambahkan';
                        confirmAddBtn.classList.add('bg-brand-coklat');
                        confirmAddBtn.classList.remove('bg-green-600');
                    }, 300);
                }, 800);
            });
        }
        if(addOverlay) addOverlay.addEventListener('click', closeAddModal);
    }

    const orderTabBtns = document.querySelectorAll('.order-tab-btn');
    const orderItems = document.querySelectorAll('.order-list-item');

    if (orderTabBtns.length > 0 && orderItems.length > 0) {
        orderTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                orderTabBtns.forEach(b => {
                    b.className = 'order-tab-btn flex-1 px-4 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap text-brand-gray hover:text-brand-birutua';
                });
                btn.className = 'order-tab-btn flex-1 px-4 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap bg-brand-birutua text-brand-cream shadow-sm';

                const status = btn.getAttribute('data-status');
                orderItems.forEach(item => {
                    if (status === 'all' || item.getAttribute('data-status') === status) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // PORTFOLIO MODAL LOGIC
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioModal = document.getElementById('portfolio-modal');
    const portfolioOverlay = document.getElementById('portfolio-overlay');
    const portfolioCard = document.getElementById('portfolio-card');
    const closePortfolioBtn = document.getElementById('close-portfolio');
    
    const pModalImg = document.getElementById('portfolio-modal-img');
    const pModalTitle = document.getElementById('portfolio-modal-title');
    const pModalDesc = document.getElementById('portfolio-modal-desc');

    if (portfolioItems.length > 0 && portfolioModal) {
        const closePortfolioModal = () => {
            portfolioModal.classList.add('opacity-0');
            portfolioCard.classList.add('scale-95');
            setTimeout(() => {
                portfolioModal.classList.add('hidden');
            }, 300);
        };

        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.getAttribute('data-img');
                const title = item.getAttribute('data-title');
                const desc = item.getAttribute('data-desc');

                if (pModalImg && pModalTitle && pModalDesc) {
                    pModalImg.src = img;
                    pModalTitle.textContent = title;
                    pModalDesc.textContent = desc;
                }

                portfolioModal.classList.remove('hidden');
                setTimeout(() => {
                    portfolioModal.classList.remove('opacity-0');
                    portfolioCard.classList.remove('scale-95');
                }, 10);
            });
        });

        if (closePortfolioBtn) closePortfolioBtn.addEventListener('click', closePortfolioModal);
        if (portfolioOverlay) portfolioOverlay.addEventListener('click', closePortfolioModal);
    }

});