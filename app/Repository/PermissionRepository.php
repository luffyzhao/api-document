<?php
namespace App\Repository;

use App\Model\Permission;
use App\Repository\Interfaces\PermissionRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;

class PermissionRepository extends Repository implements PermissionRepositoryInterface
{
    public function model()
    {
        return Permission::class;
    }
}
