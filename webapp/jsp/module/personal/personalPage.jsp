<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <div id="container" class="ns_personal">
		<aside>
			<div class="party_pavicon">휴</div>
			<div class="party_pavicon">휴</div>

		</aside>
		<main>
			<section>
				<div class="category">
					<h1 class="name">Past</h1>
					<span class="date">~ ${yesterday}</span>
				</div>
				<ul class="past">
				</ul>
			</section>
			<section>
				<div class="category">
					<h1 class="name">Today</h1>
					<span class="date">${today}</span>
				</div>
				<ul class="today">
				</ul>
			</section>
			<section>
				<div class="category">
					<h1 class="name">Future</h1>
					<span class="date">${tomorrow} ~</span>
				</div>
				<ul  class="future">
				</ul>
			</section>
		</main>
    </div>
    <script language="javascript" type="text/javascript" src="/commons/js/personal/ubuntudoPersonal.js"></script>
    <script language="javascript" type="text/javascript" src="/commons/js/personal/dataManager.js"></script>
	<script language="javascript" type="text/javascript" src="/commons/js/personal/todoManager.js"></script>
    <script language="javascript" type="text/javascript" src="/commons/js/personal/modalManager.js"></script>    
	<script language="javascript" type="text/javascript" src="/commons/js/start/utility.js"></script>
</body>
</html>