	<header>
		<div class="logo">
			<a href="index.php">
				<img src="http://andypatrickdesign.com/images/logo.svg" alt="Myware logo" class="logo__image">
			</a>
		</div>
		<nav class="menu">
			<input type="checkbox" href="#" class="menu__checkbox" name="menu--open" id="menu--open"/>
			<label class="menu__button" for="menu--open">
				<span class="hamburger hamburger--top"></span>
				<span class="hamburger hamburger--mid"></span>
				<span class="hamburger hamburger--bottom"></span>
			</label>

			<a href="#" class="menu__item">
				<i class="fa fa-bar-chart"></i>
			</a>
			<a href="#" class="menu__item">
				<i class="fa fa-plus"></i>
			</a>
			<a href="#" class="menu__item">
				<i class="fa fa-heart"></i>
			</a>
			<a href="#" class="menu__item">
				<i class="fa fa-envelope"></i>
			</a>	
		</nav>

		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
			<defs>
				<filter id="shadowed-goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="5" />
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
					<feGaussianBlur in="goo" stdDeviation="0" result="shadow" />
					<feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
					<feOffset in="shadow" dx="1" dy="1" result="shadow" />
					<!--<feComposite in2="shadow" in="goo" result="goo" />-->
					<feComposite in2="goo" in="SourceGraphic" result="mix" />
				</filter>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
					<feComposite in2="goo" in="SourceGraphic" result="mix" />
				</filter>
			</defs>
		</svg>
	</header>