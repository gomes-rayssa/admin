<header class="header">
    <h1><i class="fas fa-candy-cane"></i> Doces Admin</h1>
    <div class="header-actions">
        <div class="user-info">
            <div class="user-avatar">
                <?php echo strtoupper(substr($_SESSION['admin_email'] ?? 'A', 0, 1)); ?>
            </div>
            <span><?php echo $_SESSION['admin_email'] ?? 'Admin'; ?></span>
        </div>
        <a href="logout.php" class="btn-icon" title="Sair">
            <i class="fas fa-sign-out-alt"></i>
        </a>
    </div>
</header>
