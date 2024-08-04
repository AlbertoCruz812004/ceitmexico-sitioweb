<?php

require_once 'SessionVerifier.php';

$session = new SessionVerifier();

$session->verifySession();
