#!/usr/bin/env python3
"""
This module provides type-annotated function fo addition.
"""


def sum_list(input_list: list[float]) -> float:
    """
    This function takes a list of floats as argument 
    and returns their sum as float.
    """
    return sum(input_list)
