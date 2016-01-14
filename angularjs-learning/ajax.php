<?php

$action = isset($_GET['action']) ? $_GET['action'] : '';

switch ($action) {

    case 'list-oceans':
        $continents = array(
            array('name' => 'Pacific Ocean', 'volume' => 50.1, 'depth' => 3970),
            array('name' => 'Atlantic Ocean', 'volume' => 23.3, 'depth' => 3646),
            array('name' => 'Indian Ocean', 'volume' => 19.8, 'depth' => 3741),
            array('name' => 'Southern Ocean', 'volume' => 5.4, 'depth' => 3270),
            array('name' => 'Arctic Ocean', 'volume' => 1.4, 'depth' => 1205)
        );
        echo json_encode($continents);
        break;
    
    case 'list':
        $continents = array(
            'Asia',
            'Africa',
            'North America',
            'South America',
            'Antarctica',
            'Europe',
            'Australia'
        );
        echo json_encode($continents);
        break;
    
    case 'update':
        $response = array('success' => false);
        if(isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            $id = isset($data['id']) ? intval($data['id']) : '';
            // do something with $id
            $response['success'] = true;
        }
        echo json_encode($response);
        break;
    
    default:
        break;
}