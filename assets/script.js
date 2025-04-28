window.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.getElementById('menu-toggle')
	const navMenus = document.getElementById('nav-menus')
	const navMenuList = Array.from(navMenus.children)
	const overlay = document.getElementById('overlay')
	const line1 = document.getElementById('line-1')
	const line2 = document.getElementById('line-2')
	const line3 = document.getElementById('line-3')


	// Inisialisasi jQuery Validate untuk form kontak
	$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            fullname: {
                required: true,
                maxlength: 50
            },
            email: {
                required: true,
                email: true,
                maxlength: 254
            },
            phone: {
                required: true,
                maxlength: 14
            },
            message: {
                required: true,
                maxlength: 254
            }
        },
        messages: {
            fullname: {
                required: "Full name must be filled in",
                maxlength: "Full name must not exceed 50 characters"
            },
            email: {
                required: "Email must be filled in",
                email: "Invalid email format",
                maxlength: "Email must not exceed 254 characters"
            },
            phone: {
                required: "Phone number must be filled in",
                maxlength: "Phone number must not exceed 14 characters"
            },
            message: {
                required: "Message must be filled in",
                maxlength: "Message must not exceed 254 characters"
            }
        },
        submitHandler: function(form) {
            // Tambahkan kode untuk menampilkan notifikasi
            alert("Form has been successfully submitted. Press OK to continue.");
            // Tambahkan kode untuk submit form atau tindakan lainnya di sini
            // form.submit(); // Uncomment ini jika ingin melanjutkan dengan submit form
			// Reset form setelah submit
			form.reset();
        }
    });
});

	

	menuToggle.addEventListener('click', () => {
		navMenus.classList.toggle('active')
		overlay.classList.toggle('active')
		menuToggle.classList.toggle('active')

		line1.classList.toggle('active')
		line2.classList.toggle('active')
		line3.classList.toggle('active')

		navMenuList.map((menu) => {
			menu.classList.toggle('active')

			return menu
		})
	})

	overlay.addEventListener('click', () => {
		navMenus.classList.remove('active')
		overlay.classList.remove('active')
		menuToggle.classList.remove('active')

		line1.classList.remove('active')
		line2.classList.remove('active')
		line3.classList.remove('active')

		navMenuList.map((menu) => {
			menu.classList.remove('active')

			return menu
		})
	})
})
