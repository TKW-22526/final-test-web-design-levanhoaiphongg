const products = {
    1: {
        image: "../assets/images/mockhoa.jpg",
        name: "Móc Khóa Việt Nam Dễ Thương",
        price: "35.000 đ",
        desc: "Móc khóa được làm bằng nhựa với sự tỉ mỉ từ việc thiết kế siêu dễ thương, không phai màu, không hư hỏng,mang đậm dấu ấn Việt Nam.",
        seller: "Shop Việt",
        area: "TP. Trà Vinh",
        rating: "⭐⭐⭐⭐⭐ (4.9/5)"
    },
    2: {
        image: "../assets/images/thubong.jpg",
        name: "Thú Bông Nước Úc",
        price: "150.000 đ",
        desc: "Thú bông Kangaroo được thiết kế dựa trên hình ảnh chuột túi – biểu tượng nổi tiếng của nước Úc. Sản phẩm được làm từ chất liệu vải mềm mại, đường may tỉ mỉ và kiểu dáng đáng yêu, thích hợp làm quà tặng cho mọi lứa tuổi.",
        seller: "Shop Quốc tế",
        area: "TP. Hồ Chí Minh",
        rating: "⭐⭐⭐⭐⭐ (4.8/5)"
    },
    3: {
        image: "../assets/images/ao.jpg",
        name: "Áo Nước Anh",
        price: "220.000 đ",
        desc: "Áo in họa tiết biểu tượng nước Anh, chất liệu mềm mại, bền đẹp, phù hợp mặc hằng ngày và làm quà lưu niệm.",
        seller: "Phúc(Trà Vinh)",
        area: "TP. Trà Vinh",
        rating: "⭐⭐⭐⭐⭐ (4.85/5)"
    },
    4: {
        image: "../assets/images/chuonggio.jpg",
        name: "Chuông gió May Mắn",
        price: "100.000 đ",
        desc: "Chuông gió phong cách Nhật Bản được thiết kế tinh tế với âm thanh nhẹ nhàng, tượng trưng cho may mắn, bình an và hạnh phúc. Là món quà lưu niệm ý nghĩa dành cho gia đình, bạn bè hoặc để trang trí không gian.",
        seller: "Minh(Cà Mau)",
        area: "TP. Cà Mau",
        rating: "⭐⭐⭐⭐⭐ (4.95/5)"
    },
    5: {
        image: "../assets/images/ly.jpg",
        name: "Ly In Địa Danh",
        price: "150.000 đ",
        desc: "Ly in địa danh mang hình ảnh các danh lam thắng cảnh đặc trưng, góp phần quảng bá văn hóa và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm phù hợp làm quà lưu niệm cho người thân và bạn bè.",
        seller: "Shop Hà Nội ",
        area: "TP. Hà Nội",
        rating: "⭐⭐⭐⭐⭐ (4.75/5)"
    },
    6: {
        image: "../assets/images/tranhgo.jpg",
        name: "Tranh Gỗ Trung Hoa",
        price: "500.000 đ",
        desc: "Tranh Gỗ Trung Hoa được chế tác với họa tiết mang đậm nét văn hóa và nghệ thuật truyền thống Trung Quốc. Thiết kế tinh xảo, màu sắc hài hòa, sản phẩm thích hợp để trang trí không gian sống hoặc làm quà lưu niệm, góp phần lưu giữ những giá trị văn hóa đặc sắc.",
        seller: "Ngọc(Thanh Hóa)",
        area: "TP. Thanh Hóa",
        rating: "⭐⭐⭐⭐⭐ (4.85/5)"
    },
    7: {
        image: "../assets/images/nonla.jpg",
        name: "Nón Lá Việt Nam",
        price: "150.000 đ",
        desc: "Nón lá Việt Nam được chế tác từ các vật liệu tự nhiên như lá cọ, lá kè và tre, trải qua nhiều công đoạn tỉ mỉ để tạo nên sản phẩm nhẹ, bền và có độ hoàn thiện cao. Thiết kế truyền thống kết hợp với đường khâu chắc chắn giúp nón vừa có giá trị sử dụng vừa thích hợp làm quà lưu niệm hoặc vật trang trí.",
        seller: "Hải(Huế)",
        area: "TP. Huế",
        rating: "⭐⭐⭐⭐⭐ (4.95/5)"
    },
    8: {
        image: "../assets/images/tuongmeo.jpg",
        name: "Tượng Mèo Ai Cập",
        price: "100.000 đ",
        desc: "Tượng Mèo Ai Cập được chế tác với các đường nét tinh xảo, lấy cảm hứng từ hình tượng mèo trong nền văn minh Ai Cập cổ đại. Sản phẩm có thiết kế sang trọng, chất liệu bền đẹp, thích hợp làm quà lưu niệm hoặc trang trí không gian sống.",
        seller: "Shop Tượng Gốm",
        area: "TP. Vinh",
        rating: "⭐⭐⭐⭐⭐ (4.80/5)"
    },
    9: {
        image: "../assets/images/latdat.jpg",
        name: "Con Lật Đật",
        price: "100.000 đ",
        desc: "Con lật đật được chế tác từ chất liệu bền đẹp, bề mặt hoàn thiện tỉ mỉ cùng thiết kế tự cân bằng độc đáo. Sản phẩm mang đến cảm giác vui nhộn, thích hợp để trưng bày hoặc làm quà lưu niệm.",
        seller: "Travel and Shopping",
        area: "TP. Vĩnh Long",
        rating: "⭐⭐⭐⭐⭐ (4.75/5)"
    },
    10: {
        image: "../assets/images/hopnhac.jpg",
        name: "Hộp Nhạc Châu Âu",
        price: "450.000 đ",
        desc: "Hộp nhạc phong cách châu Âu được thiết kế tinh xảo với họa tiết cổ điển và giai điệu du dương, mang vẻ đẹp sang trọng, lãng mạn. Sản phẩm thích hợp làm quà lưu niệm, quà tặng hoặc trang trí không gian sống.",
        seller: "Long(Đà Nẵng)",
        area: "TP. Đà Nẵng",
        rating: "⭐⭐⭐⭐⭐ (4.80/5)"
    },
    11: {
        image: "../assets/images/quacau.jpg",
        name: "Quả Cầu Rồng",
        price: "300.000 đ",
        desc: "Quả cầu thủy tinh hình rồng được chế tác tinh xảo với hình ảnh rồng bên trong, mang vẻ đẹp sang trọng và cuốn hút. Sản phẩm phù hợp làm quà lưu niệm, quà tặng hoặc vật trang trí cho nhiều không gian.",
        seller: "An(Bắc Ninh)",
        area: "TP. Bắc Ninh",
        rating: "⭐⭐⭐⭐⭐ (4.65/5)"
    },
    12: {
        image: "../assets/images/thap.jpg",
        name: "Móc Khóa Tháp Eiffel",
        price: "70.000 đ",
        desc: "Móc khóa Tháp Eiffel được thiết kế mô phỏng công trình biểu tượng nổi tiếng của nước Pháp với các chi tiết tinh xảo và kích thước nhỏ gọn. Sản phẩm thích hợp làm quà lưu niệm, quà tặng hoặc phụ kiện trang trí cho chìa khóa và balo.",
        seller: "Phong(Trà Vinh)",
        area: "TP. Trà Vinh",
        rating: "⭐⭐⭐⭐⭐ (4.90/5)"
    },
};

const id = new URLSearchParams(window.location.search).get("id");// Lấy id sản phẩm từ URL
const p = products[id];// Lấy id sản phẩm theo id

if (p) {
    document.getElementById("product-detail").innerHTML = 
    `
        <div class="product-detail-container">
            <img src="${p.image}" class="detail-img">

            <div class="detail-content">
                <h2>${p.name}</h2>
                <p class="price">${p.price}</p>
                <p><strong>Mô tả sản phẩm:</strong> ${p.desc}</p>

                <div class="contact-box">
                    <h3>Thông Tin sản phẩm</h3>
                    <p><strong>Họ tên:</strong> ${p.seller}</p>
                    <p><strong>Khu vực:</strong> ${p.area}</p>
                    <p><strong>Đánh giá:</strong> ${p.rating}</p>

                    <button id="btn-chat" class="btn" style="margin-top:15px;width:100%">
                        Chốt Đơn Với Người Bán
                    </button>
                </div>
            </div>
        </div>
    `;
}
// Xử lý tương tác kết nối Người dùng <-> Người mua (Người bán)
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Giả lập tính năng nhắn tin nhanh ở trang chi tiết
    const btnLienHe = document.getElementById("btn-chat");
    if(btnLienHe) {
        btnLienHe.addEventListener("click", function() {
            alert("Hệ thống đã ghi nhận đơn hàng của bạn cảm ơn bạn đã mua hàng!");
        });
    }

    // 2. kiểm tra form liên hệ cơ bản
    const contactForm = document.getElementById("contact-form");
    if(contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("txt-name").value;
            const email = document.getElementById("txt-email").value;
            
            if(name.trim() === "" || email.trim() === "") {
                alert("Vui lòng điền đầy đủ thông tin để gửi lời nhắn!");
            } else {
                alert(`Cảm ơn bạn ${name}! Lời nhắn của bạn đã được gửi đến ban quản trị Souvenir Connect.`);
                contactForm.reset();
            }
        });
    }
});