<footer class="site-footer" id="site-footer">
	<div class="hfg_footer">
		<div class="footer--row footer-main layout-full-contained" id="cb-row--footer-desktop-main" data-row-id="main" data-show-on="desktop">
			<div class="footer--row-inner footer-main-inner footer-content-wrap">
				<div class="container">
					<div class="hfg-grid nv-footer-content hfg-grid-main row--wrapper row " data-section="hfg_footer_layout_main">
						<div class="hfg-slot left"></div><div class="hfg-slot c-left"></div><div class="hfg-slot center"></div>							</div>
				</div>
			</div>
		</div>

		<div class="footer--row footer-bottom layout-full-contained" id="cb-row--footer-desktop-bottom" data-row-id="bottom" data-show-on="desktop">
			<div class="footer--row-inner footer-bottom-inner footer-content-wrap">
				<div class="container">
					<div class="hfg-grid nv-footer-content hfg-grid-bottom row--wrapper row " data-section="hfg_footer_layout_bottom">
						<div class="hfg-slot left"><div class="builder-item desktop-left tablet-left mobile-left"><div class="item--inner builder-item--footer-one-widgets" data-section="neve_sidebar-widgets-footer-one-widgets" data-item-id="footer-one-widgets">
							<div class="widget-area">
								<div id="block-13" class="widget widget_block">
									<div class="wp-block-media-text is-stacked-on-mobile" style="grid-template-columns:20% auto"><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="225" height="225" src="https://grok.free/wp-content/uploads/2025/06/grok-free.png" alt="Grok Free" class="wp-image-97 size-full" srcset="https://grok.free/wp-content/uploads/2025/06/grok-free.png 225w, https://grok.free/wp-content/uploads/2025/06/grok-free-150x150.png 150w" sizes="auto, (max-width: 225px) 100vw, 225px"></figure><div class="wp-block-media-text__content">
										<p><strong>Grok</strong> is an artificial intelligence model developed by <strong>xAI</strong>, the startup founded by <strong>Elon Musk</strong>. Integrated into the <strong>X platform</strong> (formerly Twitter), Grok allows users to interact with an AI that is connected to real-time news, fast, and capable of understanding complex queries. It embodies the vision of a free, useful, and evolving AI.</p>
										</div></div>
								</div>	</div>
							</div>

							</div><div class="builder-item cr"><div class="item--inner"><div class="component-wrap"><div><p><a href="https://grok.free/privacy-policy/">About & Privacy Policy</a> | Copyright © 2025 by <a href="https://grok.free/">Grok.free</a></p></div></div></div></div></div><div class="hfg-slot c-left"><div class="builder-item desktop-center tablet-left mobile-left"><div class="item--inner builder-item--footer-two-widgets" data-section="neve_sidebar-widgets-footer-two-widgets" data-item-id="footer-two-widgets">
						<div class="widget-area">
							<div id="block-20" class="widget widget_block"><center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.3799864998973!2d-0.1583528238221039!3d51.44148671551689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760503eb291fa3%3A0x43c8f5dbde9af4c3!2sGrok.Free!5e1!3m2!1svi!2s!4v1749443438985!5m2!1svi!2s" width="350" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center></div>	</div>
						</div>

						</div></div>							</div>
				</div>
			</div>
		</div>

	</div>
</footer>
<script>
	document.addEventListener('DOMContentLoaded', function() {
		const questions = document.querySelectorAll('.faq-question');

		questions.forEach(question => {
			question.addEventListener('click', () => {
				const answer = question.nextElementSibling;
				const icon = question.querySelector('.icon i');

				// Toggle active class on the answer
				answer.classList.toggle('active');

				// Toggle rotate class on the icon
				icon.classList.toggle('rotate');

				// Close other answers
				const allAnswers = document.querySelectorAll('.faq-answer');
				const allIcons = document.querySelectorAll('.icon i');

				allAnswers.forEach((item, index) => {
					if (item !== answer && item.classList.contains('active')) {
						item.classList.remove('active');
						allIcons[index].classList.remove('rotate');
					}
				});
			});
		});
	});
</script>
</div><!--/.wrapper-->
<?php

wp_footer();

/**
 * Executes actions before the body tag is closed.
 *
 * @since 2.11
 */
do_action( 'neve_body_end_before' );

?>
</body>

</html>
