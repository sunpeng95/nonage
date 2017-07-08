<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>农情监测</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/water.css">
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
</head>
<body>
    <div>
        <p class="title"><b>河北省冬小麦精量灌溉决策支持系统</b></p>
        <hr>
    </div>
    <div>
        <ul>
            <li class='left-border'>土壤养分</li>
            <li class='left-border'>苗情</li>
            <li class='left-border'>病虫害</li>
            <li class='left-border'><a href="water.php">土壤含水量</a></li>
        </ul>
        <div id="line">
            <script src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script>
            <script type="text/javascript" src="../js/line.js"></script>
            <script type="text/javascript" src="../js/water_ajax.js"></script>
        </div>
        <table id="water">
            <tr>
                <td>深度</td>
                <td>湿度</td>
            </tr>
            <?php
                $db = mysqli_connect("localhost","root","11111111","water");
                $sql = "SELECT * FROM think";
                $result = mysqli_query($db,$sql);
                $response = mysqli_fetch_all($result);
                mysqli_close($db);
                foreach ($response as $key => $value):
            ?>
            <tr class="value">
            <td><?=$value[0]?></td>
                <td><?=$value[1]?></td>
            </tr>
            <?endforeach?>
        </table>
    </div>
</body>
</html>