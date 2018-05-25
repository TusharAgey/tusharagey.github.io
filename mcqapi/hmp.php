<form action="index.html" method="GET">
	<input type="text" name="success" value="1"></input>
	<input type="submit" id = "btn"></input>
</form>
<?php
	echo "
	<script>
		document.getElementById('btn').click();
	</script>
	";
?>	